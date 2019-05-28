import {PropsVariants, ValueProcessor} from "./ValueProcessor";

export class GenericValueProcessor<TOut, TP1, TP2> extends ValueProcessor<TOut, TP1, TP2> {

	constructor(implementation: () => TOut);
	constructor(implementation: (arg1: TP1) => TOut, arg1: TP1);
	constructor(implementation: (arg1: TP1, arg2: TP2) => TOut, arg1: TP1, arg2: TP2);
	constructor(public readonly implementation: (...args: any[]) => TOut, ...args: PropsVariants<TP1, TP2>) {
		super(...args as []);
	}

	get() {
		return this.implementation(...this.params);
	}

	static new<TOut, TP1, TP2>(implementation: (...args: PropsVariants<TP1, TP2>) => TOut) {
		return class Anonymous extends GenericValueProcessor<TOut, TP1, TP2> {
			constructor(...args: PropsVariants<TP1, TP2>) {
				super(implementation, ...args as []);
			}
		};
	}
}
