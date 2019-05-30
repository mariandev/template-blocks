import {AnyValueProcessor, ValueProcessor} from "../Base";
import {Observe, Observer} from "../General/Observe";

export function observe<TOut>(this: AnyValueProcessor<TOut>, obserer: Observer<TOut>) {
	return new Observe(this, obserer);
}

ValueProcessor.prototype.observe = observe;