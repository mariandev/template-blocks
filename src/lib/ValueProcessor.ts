import {Const} from "./ValueProcessors/Generators";

type Prop2<TClass> = TClass extends ValueProcessor<any, any, infer P> ? P : never;

export abstract class ValueProcessor<TOut, TP1 = never, TP2 = never> {

	protected readonly params: [TP1, TP2] |
														 [TP1] |
														 [];

	constructor();
	constructor(p1: TP1);
	constructor(p1: TP1, p2: TP2);
	constructor(...params: [TP1, TP2] |
												 [TP1] |
												 []) {
		this.params = params;
	}

	public abstract get(): TOut;

	public toSource(): Source<TOut, TP1, TP2> {
		return new Source<TOut, TP1, TP2>(this);
	}

	pipe<PClass>(processor: (new (p1: ValueProcessor<TOut, TP1, TP2>) => PClass), ...params: []): PClass;
	pipe<PClass, PP2 = Prop2<PClass>>(processor: (new (p1: ValueProcessor<TOut, TP1, TP2>, p2: PP2) => PClass), ...params: [PP2]): PClass;
	pipe(processor: new (...args: any[]) => any, ...params: any[]) {
		return new processor(this, ...params);
	}

	dump(): this {
		console.log(this);
		return this;
	}

	toConst(): Const<TOut> {
		return new Const(this.get());
	}
}

export class Source<TOut, TP1 = never, TP2 = never> extends ValueProcessor<TOut, TP1, TP2> {
	constructor(private source: ValueProcessor<TOut, TP1, TP2>) {
		super();
	}

	public changeSource(newSource: ValueProcessor<TOut, TP1, TP2>) {
		this.source = newSource;
	}

	get() {
		return this.source.get();
	}
}