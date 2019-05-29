import {float} from "../Primitives";

export type LoopListener = (dt: number) => any;

export class Loop {
	private _running: boolean = false;
	public get isRunning() {
		return this._running;
	}

	private _listeners: LoopListener[] = [];

	private lsts: float = null;

	private loop() {
		if(!this._running) return;

		this.raf(this.loop);

		if(this.lsts == null) this.lsts = Date.now();
		const ts = Date.now();
		const dt = (ts - this.lsts) / 1000;
		this.lsts = ts;

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

		this.lsts = null;
		this.loop();

		return this;
	}
	public stop(): this {
		this._running = false;

		return this;
	}
}