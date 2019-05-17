import {ValueProcessor} from "../Base";
import {float} from "../../Primitives";

export class Random extends ValueProcessor<float> {
	get() {
		return Math.random();
	}
}