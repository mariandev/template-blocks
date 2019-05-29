import {AnyValueProcessor, ValueProcessor, Var} from "./Base";

export class FeedInto<TOut> extends ValueProcessor<TOut, AnyValueProcessor<TOut>, Var<TOut>> {
	constructor(public readonly source: AnyValueProcessor<TOut>,
							public readonly target: Var<TOut>) {
		super(source, target);
	}

	get() {
		const value = this.source.get();

		this.target.set(value);

		return value;
	}
}