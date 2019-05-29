import {ValueProcessor} from "../Base/ValueProcessor";
import {Var} from "../Base/Var";

export function toVar<TOut>(this: ValueProcessor<TOut, any, any>): Var<TOut> {
	return new Var(this);
}

ValueProcessor.prototype.toVar = toVar;
