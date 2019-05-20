import {ValueProcessor} from "./ValueProcessor";
import {float} from "../Primitives";
import {Timestamp} from "./Generators";

export class DeltaTime extends ValueProcessor<float> {
	private ts = new Timestamp();
	private lsts: float = null;

	reset() {
		this.lsts = null;
	}

	get() {
		if(this.lsts == null) this.lsts = this.ts.get();
		const ts = this.ts.get();
		const dt = (ts - this.lsts) / 1000;
		this.lsts = ts;

		return dt;
	}
}