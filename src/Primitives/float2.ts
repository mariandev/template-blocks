import {float} from "./float";
import {IOpEquals, IOpGreater} from "../Interfaces/LogicOperators";

export class float2 implements IOpEquals, IOpGreater {
	// noinspection JSSuspiciousNameCombination
	constructor(public readonly x: float,
							public readonly y: float = x) {}

	private _sqrMagnitude: float | undefined;
	public get sqrMagnitude(): float {
		if(typeof this._sqrMagnitude == "undefined") {
			this._sqrMagnitude = this.x ** 2 + this.y ** 2;
		}

		return this._sqrMagnitude;
	}

	private _magnitude: float | undefined;
	public get magnitude(): float {
		if(typeof this._sqrMagnitude == "undefined") {
			this._magnitude = Math.sqrt(this.sqrMagnitude);
		}

		return this._magnitude;
	}

	public mul(value: float) {
		return new float2(this.x * value, this.y * value);
	}

	public toString() {
		return `float2(${this.x}, ${this.y})`;
	}

	public clone() {
		return new float2(this.x, this.y);
	}

	public equals(other: float2) {
		return this.x == other.x && this.y == other.y;
	}

	public greater(other: float2) {
		return this.x > other.x && this.y > other.y;
	}

	public static get zero() { return new float2(0, 0); }
	public static get one() { return new float2(1, 1); }

	public static get up() { return new float2(0, 1); }
	public static get down() { return new float2(0, -1); }
	public static get left() { return new float2(-1, 0); }
	public static get right() { return new float2(1, 0); }
}