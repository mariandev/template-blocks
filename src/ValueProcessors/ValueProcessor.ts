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

	pipe<PClass>(processor: (new (p1: ValueProcessor<TOut, TP1, TP2>) => PClass), ...params: []): PClass;
	pipe<PClass, PP2 = Prop2<PClass>>(processor: (new (p1: ValueProcessor<TOut, TP1, TP2>, p2: PP2) => PClass), ...params: [PP2]): PClass;
	pipe(processor: new (...args: any[]) => any, ...params: any[]) {
		return new processor(this, ...params);
	}

	dump(): this {
		console.log(this);
		return this;
	}

	public toSource(): Source<TOut, TP1, TP2> {
		return new Source<TOut, TP1, TP2>(this);
	}

	public toConst() {
		return Const.of(this);
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

export class Const<T> extends ValueProcessor<T> {
	constructor(private readonly value: T) {
		super();
	}

	get() {
		return this.value;
	}

	public static of<T>(constant: T): Const<T>;
	public static of<T>(processor: ValueProcessor<T>): Const<T>;
	public static of<T>(thing: T | ValueProcessor<T>): Const<T> {
		if(thing instanceof ValueProcessor) {
			thing = thing.get() as T;
		}

		return new Const<T>(thing);
	}
}

export class Var<T> extends ValueProcessor<T> {
	constructor(private value: T) {
		super();
	}

	set(value: T) {
		this.value = value;
	}

	get() {
		return this.value;
	}

	public static of<T>(constant: T): Var<T>;
	public static of<T>(processor: ValueProcessor<T>): Var<T>;
	public static of<T>(thing: T | ValueProcessor<T>): Var<T> {
		if(thing instanceof ValueProcessor) {
			thing = thing.get() as T;
		}

		return new Var<T>(thing);
	}
}