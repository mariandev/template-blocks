import {Const, ValueProcessor} from "../Base";

export function toConst<TOut>(this: ValueProcessor<TOut, any, any>): Const<TOut> {
	return new Const(this);
}

ValueProcessor.prototype.toConst = toConst;
