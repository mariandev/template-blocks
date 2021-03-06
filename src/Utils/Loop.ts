import {float} from "../Primitives";
import {Var} from "../ValueProcessors/Base";

export type LoopListener = (dt: number) => any;

export class Loop {
	private _running: boolean = false;
	public get isRunning() {
		return this._running;
	}

	private _listeners: LoopListener[] = [];

	private _lsts: float = null;

	public readonly dt = new Var(0);

	private loop() {
		if(!this._running) return;

		this.raf.call(window, () => this.loop());

		if(this._lsts == null) this._lsts = Date.now();
		const ts = Date.now();
		const dt = (ts - this._lsts) / 1000;
		this._lsts = ts;

		this.dt.set(dt);

		for (const listener of this._listeners) {
			listener(dt);
		}
	}

	private raf = (function(){
		return  (window as any).requestAnimationFrame       ||
						(window as any).webkitRequestAnimationFrame ||
						(window as any).mozRequestAnimationFrame    ||
						function( callback ){
							window.setTimeout(callback, 1000 / 60);
						};
	})();

	public register<T extends LoopListener>(listener: T): T {
		if(this._listeners.indexOf(listener) === -1) {
			this._listeners.push(listener);
		}

		return listener;
	}

	public unregister(listener: LoopListener) {
		const index = this._listeners.indexOf(listener);

		if(index != -1) {
			this._listeners.splice(index, 1);
		}
	}

	public start(): this {
		if(this._running) return;

		this._running = true;

		this._lsts = null;
		this.dt.set(0);
		this.loop();

		return this;
	}
	public stop(): this {
		this._running = false;

		return this;
	}
}