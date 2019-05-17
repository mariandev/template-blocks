import {Const, ValueProcessor} from "./Base";
import {float} from "../Primitives";
import {Timestamp} from "./Generators";
import {Sub} from "./Math";

export class Timer extends ValueProcessor<float> {
	private beforeLastPause: float;
	private sinceLastPause: ValueProcessor<float>;

	constructor() {
		super();
		this.reset();
	}

	public reset(): this {
		this.beforeLastPause = 0;
		this.sinceLastPause = new Const(0);

		return this;
	}

	public pause(): this {
		this.beforeLastPause += this.sinceLastPause.get();
		this.sinceLastPause = new Const(0);

		return this;
	}

	public play(): this {
		const ts = new Timestamp();
		this.sinceLastPause = new Sub(ts, new Const(ts));

		return this;
	}

	get() {
		return this.beforeLastPause + this.sinceLastPause.get();
	}
}