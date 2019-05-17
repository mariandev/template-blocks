import {ValueProcessor} from "./Base";
import {float, float2} from "../Primitives";

export class GetPercent<T extends float | float2> extends ValueProcessor<T> {
	constructor(private readonly value: ValueProcessor<T>,
							private readonly valueMax: ValueProcessor<T>) {
		super();
	}

	get() {
		const value = this.value.get();
		const valueMax =  this.valueMax.get();

		if(value instanceof float2 && valueMax instanceof float2) {
			return new float2(
				value.x / valueMax.x,
				value.y / valueMax.y
			) as T;
		} else {
			return ((value as unknown as float) / (valueMax as unknown as float)) as T;
		}
	}
}