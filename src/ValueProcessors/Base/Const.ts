import {ValueProcessor} from "./ValueProcessor";

export class Const<TOut> extends ValueProcessor<TOut> {
	private readonly value: TOut;
	constructor(thing: TOut | ValueProcessor<TOut, any, any>) {
		super();

		if (thing instanceof ValueProcessor) {
			thing = thing.get() as TOut;
		}

		this.value = thing;
	}

	get() {
		return this.value;
	}

	public static get ofRaw(): typeof ConstOfRaw {
		return ConstOfRaw;
	};
}

/**
 * Internal class
 * @hidden
 */
class ConstOfRaw<T> extends ValueProcessor<T> {
	constructor(private readonly value: T) {
		super();
	}

	get() {
		return this.value;
	}
}