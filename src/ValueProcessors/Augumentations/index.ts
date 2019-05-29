import {toConst} from "./toConst";
import {toVar} from "./toVar";
import {evaluatePeriodically} from "./evaluatePeriodically";
import {feedInto} from "./feedInto";

export * from "./toConst";
export * from "./toVar";
export * from "./evaluatePeriodically";

/**
 * Internal
 * @hidden
 */
declare module "../Base/ValueProcessor" {
	interface ValueProcessor<TOut> {
		toConst: typeof toConst;
		toVar: typeof toVar;
		evaluatePeriodically: typeof evaluatePeriodically;
		feedInto: typeof feedInto;
	}
}