import {Const, ValueProcessor} from "../Base";
import {AnyFloat} from "../../Primitives";
import {DoOp} from "./DoOp";

export class Div<T extends AnyFloat> extends ValueProcessor<T> {
	constructor(private readonly one: ValueProcessor<T>,
							private readonly two: ValueProcessor<T>) {
		super();
	}

	get() {
		const one = this.one.get();
		const two = this.two.get();

		return DoOp<T>(one, two, (a, b) => a / b);
	}

	public static OneOver<T extends AnyFloat>(value: ValueProcessor<T>) {
		return new Div(new Const(1 as T), value);
	}
}
