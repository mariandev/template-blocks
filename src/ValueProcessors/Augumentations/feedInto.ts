import {AnyValueProcessor, ValueProcessor, Var} from "../Base";
import {FeedInto} from "../FeedInto";

export function feedInto<TOut>(this: AnyValueProcessor<TOut>, target: Var<TOut>) {
	return new FeedInto(this, target);
}

ValueProcessor.prototype.feedInto = feedInto;