import {AnyValueProcessor, ValueProcessor} from "../Base";

export type Executor<TIn, TOut> = (ref: AnyValueProcessor<TIn>) => AnyValueProcessor<TOut>;

export class Execute<TIn, TOut> extends ValueProcessor<TOut, AnyValueProcessor<TIn>, Executor<TIn, TOut>> {
	constructor(private readonly source: AnyValueProcessor<TIn>,
							private readonly executor: Executor<TIn, TOut>) {
		super(source, executor)
	}

	get(): TOut {
		return this.executor(this.source).get();
	}
}