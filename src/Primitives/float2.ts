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

	private _angle: float | undefined;
	public get angle(): float {
		if(!this._angle) {
			this._angle = Math.atan2(this.y, this.x);
		}

		return this._angle;
	}

	public add({x, y}: float2) {
		return new float2(this.x + x, this.y + y);
	}

	public sub({x, y}: float2) {
		return new float2(this.x - x, this.y - y);
	}

	public mul(value: float);
	public mul(value: float2);
	public mul(value: float | float2) {
		let x: number, y: number;
		if(value instanceof float2) {
			x = value.x;
			y = value.y;
		} else {
			x = y = value;
		}

		return new float2(this.x * x, this.y * y);
	}

	public div(value: float);
	public div(value: float2);
	public div(value: float | float2) {
		let x: number, y: number;
		if(value instanceof float2) {
			x = value.x;
			y = value.y;
		} else {
			x = y = value;
		}

		return new float2(this.x / x, this.y / y);
	}

	public dot(value: float2) {
		return this.magnitude * value.magnitude * Math.cos(this.angle * Math.PI / 180);
	}

	public rotate(deg: float) {
		const magnitude = this.magnitude;
		const rad = deg * Math.PI / 180;
		const angle = rad + this.angle;
		return new float2(Math.cos(angle) * magnitude, Math.sin(angle) * magnitude);
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