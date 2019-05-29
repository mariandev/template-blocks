import {ValueProcessor} from "../Base";
import {EvaluatePeriodically} from "../EvaluatePeriodically";
import {Loop} from "../../Utils";
import {float} from "../../Primitives";

export function evaluatePeriodically<TOut>(this: ValueProcessor<TOut, any, any>, thing: float | Loop): EvaluatePeriodically<TOut> {
	return new EvaluatePeriodically(this, thing);
}

ValueProcessor.prototype.evaluatePeriodically = evaluatePeriodically;