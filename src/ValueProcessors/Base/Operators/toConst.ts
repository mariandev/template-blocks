import {ValueProcessor} from "../ValueProcessor";
import {Const} from "../Const";

export function toConst<TOut>(this: ValueProcessor<TOut, any, any>): Const<TOut> {
	return new Const(this);
}

ValueProcessor.prototype.toConst = toConst;
