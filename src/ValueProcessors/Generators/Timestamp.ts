import {ValueProcessor} from "../ValueProcessor";
import {float} from "../../Primitives";

export class Timestamp extends ValueProcessor<float> {
	get() {
		return Date.now();
	}
}