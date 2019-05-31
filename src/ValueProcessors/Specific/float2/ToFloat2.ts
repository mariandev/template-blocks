import {ValueProcessor} from "../../Base";
import {float, float2} from "../../../Primitives";

export class ToFloat2 extends ValueProcessor<float2> {
	constructor(private readonly one: ValueProcessor<float>,
							private readonly two: ValueProcessor<float> = one) {
		super();
	}

	get() {
		return new float2(this.one.get(), this.two.get());
	}
}