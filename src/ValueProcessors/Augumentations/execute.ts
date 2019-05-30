import {AnyValueProcessor, ValueProcessor} from "../Base";
import {Execute, Executor} from "../General/Execute";

export function execute<TIn, TOut>(this: AnyValueProcessor<TIn>, executor: Executor<TIn, TOut>) {
	return new Execute(this, executor);
}

ValueProcessor.prototype.execute = execute;