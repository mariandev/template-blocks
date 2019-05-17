import {toConst} from "./toConst";
import {toVar} from "./toVar";

export {toConst} from "./toConst";
export {toVar} from "./toVar";

/**
 * Internal
 * @hidden
 */
declare module "../ValueProcessor" {
	interface ValueProcessor<TOut> {
		toConst: typeof toConst;
		toVar: typeof toVar;
	}
}