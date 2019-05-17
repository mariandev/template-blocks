import {ValueProcessor} from "./ValueProcessor";

export class Var<T> extends ValueProcessor<T> {
	private value: T;
	constructor(thing: T | ValueProcessor<T>) {
		super();

		if (thing instanceof ValueProcessor) {
			thing = thing.get() as T;
		}

		this.value = thing;
	}

	set(thing: T | ValueProcessor<T>) {
		if (thing instanceof ValueProcessor) {
			thing = thing.get() as T;
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