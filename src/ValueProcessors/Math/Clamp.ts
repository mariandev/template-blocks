import {AnyValueProcessor, ValueProcessor} from "../Base";
import {AnyFloat, float, float2} from "../../Primitives";

export class Clamp<T extends AnyFloat> extends ValueProcessor<T> {
	constructor(private readonly value: AnyValueProcessor<T>,
							private readonly min: AnyValueProcessor<T>,
							private readonly max: AnyValueProcessor<T>) {
		super();
	}

	get() {
		let value = this.value.get() as AnyFloat;
		let min = this.min.get() as AnyFloat;
		let max = this.max.get() as AnyFloat;

		if(value instanceof float2 &&
			 min instanceof float2 &&
			 max instanceof float2) {
			return new float2(
				value.x < min.x ? min.x : (value.x > max.x ? max.x : value.x),
				value.y < min.y ? min.y : (value.y > max.y ? max.y : value.y),
			) as T;
		} else {
			value = value as float;
			min = min as float;
			max = max as float;

			return (value < min ? min : ( value > max ? max : value )) as T;
		}
	}
}