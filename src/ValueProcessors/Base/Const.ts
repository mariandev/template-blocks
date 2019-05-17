import {ValueProcessor} from "./ValueProcessor";

export class Const<T> extends ValueProcessor<T> {
	private readonly value: T;
	constructor(thing: T | ValueProcessor<T>) {
		super();

		if (thing instanceof ValueProcessor) {
			thing = thing.get() as T;
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