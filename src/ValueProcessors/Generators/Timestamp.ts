import {ValueProcessor} from "../Base";
import {float} from "../../Primitives";

export class Timestamp extends ValueProcessor<float> {
	get() {
		return Date.now();
	}
}