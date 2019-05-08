import {ValueProcessor} from "../ValueProcessor";
import {AnyFloat, float, float2} from "../../Primitives";
import {Const} from "../Generators";

export class Remap<T extends AnyFloat> extends ValueProcessor<T> {
	constructor(private readonly value: ValueProcessor<T>,
							private readonly fromMin: ValueProcessor<T>,
							private readonly fromMax: ValueProcessor<T>,
							private readonly toMin: ValueProcessor<T>,
							private readonly toMax: ValueProcessor<T>) {
		super();
	}

	get() {
		let value = this.value.get() as AnyFloat;
		let fromMin = this.fromMin.get() as AnyFloat;
		let fromMax = this.fromMax.get() as AnyFloat;
		let toMin = this.toMin.get() as AnyFloat;
		let toMax = this.toMax.get() as AnyFloat;

		if(value instanceof float2) {
			value = value as float2;
			fromMin = fromMin as float2;
			fromMax = fromMax as float2;
			toMin = toMin as float2;
			toMax = toMax as float2;

			return new float2(
				new Remap(
					Const.of(value.x),
					Const.of(fromMin.x),
					Const.of(fromMax.x),
					Const.of(toMin.x),
					Const.of(toMax.x)
				).get(),
				new Remap(
					Const.of(value.y),
					Const.of(fromMin.y),
					Const.of(fromMax.y),
					Const.of(toMin.y),
					Const.of(toMax.y)
				).get()
			)
		} else {
			value = value as float;
			fromMin = fromMin as float;
			fromMax = fromMax as float;
			toMin = toMin as float;
			toMax = toMax as float;

			const percent = (value - fromMin) / (fromMax - fromMin);

			return (toMax - toMin) * percent + toMin;
		}
	}
}