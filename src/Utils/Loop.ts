import {DeltaTime} from "../ValueProcessors";

type LoopListener = (dt: number) => any;

export class Loop {
	private _running: boolean = false;
	public get isRunning() {
		return this._running;
	}

	private _listeners: LoopListener[] = [];
	private _dt: DeltaTime = new DeltaTime();
	public get dt() {
		return this._dt;
	}

	private loop() {
		if(!this._running) return;

		this.raf(this.loop);

		const dt = this._dt.get();

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

		this._dt.reset();
		this.loop();

		return this;
	}
	public stop(): this {
		this._running = false;

		return this;
	}
}