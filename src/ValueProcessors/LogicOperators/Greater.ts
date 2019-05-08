import {ValueProcessor} from "../ValueProcessor";
import {float, float2} from "../../Primitives";
import {IOpGreater} from "../../Interfaces/LogicOperators";

export class Greater<TIn extends IOpGreater | float> extends ValueProcessor<boolean> {
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
			return (one as IOpGreater).greater(two as IOpGreater);
		} else {
			return one > two;
		}
	}
}