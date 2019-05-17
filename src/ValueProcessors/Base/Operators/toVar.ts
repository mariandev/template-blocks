import {ValueProcessor} from "../ValueProcessor";
import {Var} from "../Var";

export function toVar<T>(this: ValueProcessor<T>): Var<T> {
	return new Var(this);
}

ValueProcessor.prototype.toVar = toVar;
