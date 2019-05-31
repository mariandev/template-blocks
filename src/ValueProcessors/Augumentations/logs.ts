import {AnyValueProcessor, ValueProcessor} from "../Base";
import {Observe} from "../General/Observe";

export function log<TOut>(this: AnyValueProcessor<TOut>) {
	return new Observe(this, console.log);
}
export function warn<TOut>(this: AnyValueProcessor<TOut>) {
	return new Observe(this, console.warn);
}
export function error<TOut>(this: AnyValueProcessor<TOut>) {
	return new Observe(this, console.error);
}

ValueProcessor.prototype.log = log;
ValueProcessor.prototype.warn = warn;
ValueProcessor.prototype.error = error;