import {ValueProcessor} from "../ValueProcessor";
import {float} from "../Primitives";
import {Const, Timestamp} from "./Generators";
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
		this.sinceLastPause = Const.of(0);

		return this;
	}

	public pause(): this {
		this.beforeLastPause += this.sinceLastPause.get();
		this.sinceLastPause = Const.of(0);

		return this;
	}

	public play(): this {
		const ts = new Timestamp();
		this.sinceLastPause = new Sub(ts, Const.of(ts.get()));

		return this;
	}

	get() {
		return this.beforeLastPause + this.sinceLastPause.get();
	}
}