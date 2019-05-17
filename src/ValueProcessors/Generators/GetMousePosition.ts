import {ValueProcessor} from "../Base";
import {float2} from "../../Primitives";

export class GetMousePosition extends ValueProcessor<float2> {
	private position: float2 = float2.zero;

	constructor(target: Element = document.body) {
		super();
		target.addEventListener("mousemove", (e: MouseEvent) => {
			this.position = new float2(e.pageX, e.pageY);
		}, true);
	}

	public get() {
		return this.position;
	}
}