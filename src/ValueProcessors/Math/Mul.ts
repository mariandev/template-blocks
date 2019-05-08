import {ValueProcessor} from "../ValueProcessor";
import {AnyFloat} from "../../Primitives";
import {DoOp} from "./DoOp";

export class Mul<T extends AnyFloat> extends ValueProcessor<T> {
	constructor(private readonly one: ValueProcessor<T>,
							private readonly two: ValueProcessor<T>) {
		super();
	}

	get() {
		const one = this.one.get();
		const two = this.two.get();

		return DoOp<T>(one, two, (a, b) => a * b);
	}
}
