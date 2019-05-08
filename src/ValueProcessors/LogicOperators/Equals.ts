import {ValueProcessor} from "../ValueProcessor";
import {IOpEquals} from "../../Interfaces/LogicOperators";
import {float, float2} from "../../Primitives";

export class Equals<TIn extends IOpEquals | float> extends ValueProcessor<boolean> {
	constructor(private readonly one: ValueProcessor<TIn>,
							private readonly two: ValueProcessor<TIn>) {
		super();
	}

	get() {
		const one = this.one.get();
		const two = this.two.get();

		const oneFloat2 = one instanceof float2;
		const twoFloat2 = one instanceof float2;

		if(oneFloat2 && twoFloat2) {
			return (one as IOpEquals).equals(two as IOpEquals);
		} else {
			return one == two;
		}
	}
}