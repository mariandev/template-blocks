import {ValueProcessor} from "../Base";
import {float} from "../../Primitives";
import {IOpGreater} from "../../Interfaces/LogicOperators";

export class Greater<TIn extends IOpGreater | float> extends ValueProcessor<boolean> {
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
			return (one as IOpGreater).greater(two as IOpGreater);
		} else {
			return one > two;
		}
	}
}