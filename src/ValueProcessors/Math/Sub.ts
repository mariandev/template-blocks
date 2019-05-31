import {AnyValueProcessor, Const, ValueProcessor} from "../Base";
import {AnyFloat} from "../../Primitives";
import {DoOp} from "./DoOp";

export class Sub<TOut extends AnyFloat> extends ValueProcessor<TOut> {
	constructor(private readonly one: AnyValueProcessor<TOut>,
							private readonly two: AnyValueProcessor<TOut>) {
		super();
	}

	get() {
		const one = this.one.get();
		const two = this.two.get();

		return DoOp<TOut>(one, two, (a, b) => a - b);
	}

	public static OneMinus<T extends AnyFloat>(value: ValueProcessor<T>) {
		return new Sub(new Const(1 as T), value);
	}
}
