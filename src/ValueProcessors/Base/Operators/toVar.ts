import {ValueProcessor} from "../ValueProcessor";
import {Var} from "../Var";

export function toVar<TOut>(this: ValueProcessor<TOut, any, any>): Var<TOut> {
	return new Var(this);
}

ValueProcessor.prototype.toVar = toVar;
