import {toConst} from "./toConst";
import {toVar} from "./toVar";

export * from "./toConst";
export * from "./toVar";

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