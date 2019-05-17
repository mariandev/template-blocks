import {ValueProcessor} from "../ValueProcessor";
import {Const} from "../Const";

export function toConst<T>(this: ValueProcessor<T>): Const<T> {
	return new Const(this);
}

ValueProcessor.prototype.toConst = toConst;
