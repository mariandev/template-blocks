import {AnyFloat, float, float2} from "../../Primitives";
import {ValueProcessor} from "../Base";

export class Sqrt<T extends AnyFloat> extends ValueProcessor<T, ValueProcessor<T>> {
	constructor(private readonly value: ValueProcessor<T>) {
		super(value);
	}

	get() {
		let value = this.value.get();

		if(value instanceof float2) {
			return new float2(
				Math.sqrt(value.x),
				Math.sqrt(value.y)
			) as T;
		} else {
			return Math.sqrt(value as float) as T;
		}
	}
}