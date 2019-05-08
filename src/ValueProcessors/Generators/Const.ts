import {ValueProcessor} from "../ValueProcessor";

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