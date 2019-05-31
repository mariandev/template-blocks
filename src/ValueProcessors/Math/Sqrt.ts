import {AnyFloat, float, float2} from "../../Primitives";
import {AnyValueProcessor, ValueProcessor} from "../Base";

export class Sqrt<TOut extends AnyFloat> extends ValueProcessor<TOut, AnyValueProcessor<TOut>> {
	constructor(private readonly value: AnyValueProcessor<TOut>) {
		super(value);
	}

	get() {
		let value = this.value.get();

		if(value instanceof float2) {
			return new float2(
				Math.sqrt(value.x),
				Math.sqrt(value.y)
			) as TOut;
		} else {
			return Math.sqrt(value as float) as TOut;
		}
	}
}