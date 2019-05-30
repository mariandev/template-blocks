import {AnyValueProcessor, ValueProcessor} from "../Base";

export type Observer<T> = (value: T) => void;

export class Observe<TOut> extends ValueProcessor<TOut, AnyValueProcessor<TOut>, Observer<TOut>> {
	constructor(private readonly source: AnyValueProcessor<TOut>,
							private readonly observer: Observer<TOut>) {
		super(source);
	}

	get(): TOut {
		const value = this.source.get();

		this.observer(value);

		return value;
	}
}