import {ValueProcessor} from "../ValueProcessor";
import {float} from "../../Primitives";

export class GetScale extends ValueProcessor<float> {
	constructor(private readonly target: HTMLElement = document.querySelector("body > div")) {
		super();
	}

	get(): float {
		const rect = this.target.getBoundingClientRect();
		const canvasSize = Math.max(parseFloat(this.target.style.width), parseFloat(this.target.style.height));
		const realSize = Math.max(rect.width, rect.height);

		return realSize / canvasSize;
	}
}