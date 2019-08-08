type Prop2<TClass> = TClass extends ValueProcessor<any, any, infer P> ? P : never;
type Prop3<TClass> = TClass extends ValueProcessor<any, any, any, infer P> ? P : never;

export type PropsVariants<TP1, TP2, TP3> = [TP1, TP2, TP3] | [TP1, TP2] | [TP1] | [];

export abstract class ValueProcessor<TOut, TP1 = unknown, TP2 = unknown, TP3 = unknown> {

	public readonly params: PropsVariants<TP1, TP2, TP3>;

	constructor();
	constructor(p1: TP1);
	constructor(p1: TP1, p2: TP2);
	constructor(p1: TP1, p2: TP2, p3: TP3);
	constructor(...params: PropsVariants<TP1, TP2, TP3>) {
		this.params = params;
	}

	public abstract get(): TOut;

	pipe<PClass>(processor: (new (p1: ValueProcessor<TOut, TP1, TP2>) => PClass), ...params: []): PClass;
	pipe<PClass, PP2 = Prop2<PClass>>(processor: (new (p1: ValueProcessor<TOut, TP1, TP2>, p2: PP2) => PClass), ...params: [PP2]): PClass;
	pipe<PClass, PP2 = Prop2<PClass>, PP3 = Prop3<PClass>>(processor: (new (p1: ValueProcessor<TOut, TP1, TP2>, p2: PP2, p3: PP3) => PClass), ...params: [PP2, PP3]): PClass;
	pipe(processor: new (...args: any[]) => any, ...params: any[]) {
		return new processor(this, ...params);
	}
}

export abstract class AnyValueProcessor<TOut> extends ValueProcessor<TOut, any, any> {}
