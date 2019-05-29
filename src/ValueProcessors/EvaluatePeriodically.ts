import {ValueProcessor} from "./Base";
import {float} from "../Primitives";
import {Loop, LoopListener} from "../Utils";

export class EvaluatePeriodically<TOut> extends ValueProcessor<TOut, ValueProcessor<TOut, any, any>, float | Loop> {
	private _value: TOut;

	private readonly _loop: Loop;
	private readonly _time: float = -1;
	private _timer: float = 0;

	private readonly _listener: LoopListener = dt => {
		if(this._time == -1) {
			this.updateValue();
		} else {
			this._timer += dt;

			if(this._timer >= this._time) {
				this._timer -= this._time;

				this.updateValue();
			}
		}
	};

	constructor(private readonly _processor: ValueProcessor<TOut, any, any>, thing: float | Loop) {
		super(_processor, thing);

		if (thing instanceof Loop) {
			this._loop = thing;
		} else {
			this._loop = new Loop();
			this._time = thing;
		}

		this.enable();
	}

	enable(): this {
		this._loop.register(this._listener);
		return this;
	}

	disable(): this {
		this._loop.unregister(this._listener);
		return this;
	}

	private updateValue() {
		this._value = this._processor.get();
	}

	get() {
		return this._value;
	}
}