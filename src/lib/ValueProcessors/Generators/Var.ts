import {ValueProcessor} from "../../ValueProcessor";

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