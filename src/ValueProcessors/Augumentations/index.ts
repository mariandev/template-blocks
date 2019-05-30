import {toConst} from "./toConst";
import {toVar} from "./toVar";
import {evaluatePeriodically} from "./evaluatePeriodically";
import {feedInto} from "./feedInto";
import {observe} from "./observe";
import {execute} from "./execute";

export * from "./toConst";
export * from "./toVar";
export * from "./evaluatePeriodically";
export * from "./feedInto";
export * from "./observe";
export * from "./execute";

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
		observe: typeof observe;
		execute: typeof execute
	}
}