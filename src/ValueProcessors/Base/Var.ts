import {AnyValueProcessor, ValueProcessor} from "./ValueProcessor";

export class Var<TOut> extends ValueProcessor<TOut> {
	private value: TOut;
	constructor(thing: TOut | AnyValueProcessor<TOut>) {
		super();

		if (thing instanceof ValueProcessor) {
			thing = thing.get() as TOut;
		}

		this.value = thing;
	}

	set(thing: TOut | ValueProcessor<TOut>) {
		if (thing instanceof ValueProcessor) {
			thing = thing.get() as TOut;
		}

		this.value = thing;
	}

	get() {
		return this.value;
	}

	public static get ofRaw(): typeof VarOfRaw {
		return VarOfRaw;
	};
}

/**
 * Internal class
 * @hidden
 */
class VarOfRaw<T> extends ValueProcessor<T> {
	constructor(private value: T) {
		super();
	}

	set(value: T) {
		this.value = value;
	}

	get() {
		return this.value;
	}
}