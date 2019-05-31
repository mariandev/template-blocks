import {ValueProcessor} from "../Base";
import {IOpEquals} from "../../Interfaces/LogicOperators";
import {float} from "../../Primitives";

export class Equals<TIn extends IOpEquals | float> extends ValueProcessor<boolean> {
	constructor(private readonly one: ValueProcessor<TIn>,
							private readonly two: ValueProcessor<TIn>) {
		super();
	}

	get() {
		const one = this.one.get();
		const two = this.two.get();

		const oneImplementsOp = typeof (one as any).equals !== "undefined";
		const twoImplementsOp = typeof (two as any).equals !== "undefined";

		if(oneImplementsOp && twoImplementsOp) {
			return (one as IOpEquals).equals(two as IOpEquals);
		} else {
			return one == two;
		}
	}
}