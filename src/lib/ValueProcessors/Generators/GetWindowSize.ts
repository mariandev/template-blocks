import {ValueProcessor} from "../../ValueProcessor";
import {float2} from "../../Primitives";

export class GetWindowSize extends ValueProcessor<float2> {
	private size: float2 = float2.zero;

	constructor() {
		super();
		this.resetSize();
		window.addEventListener("resize", () => this.resetSize());
	}

	private resetSize() {
		this.size = new float2(innerWidth, innerHeight);
	}

	public get() {
		return this.size;
	}
}