import {Const} from "../Base";
import {Clamp} from "./Clamp";
import {float2} from "../../Primitives";

describe("class Clamp", () => {
	it("should return the value if it's between the bounds", () => {
		const min = new Const(0);
		const max = new Const(1);

		const value = new Const(0.5);

		const clamp = new Clamp(value, min, max);

		expect(clamp.get()).toEqual(value.get());
	});
	it("should return the min if the value is lower than it", () => {
		const min = new Const(0);
		const max = new Const(1);

		const value = new Const(-4);

		const clamp = new Clamp(value, min, max);

		expect(clamp.get()).toEqual(min.get());
	});
	it("should return the max if the value is bigger than it", () => {
		const min = new Const(0);
		const max = new Const(1);

		const value = new Const(4);

		const clamp = new Clamp(value, min, max);

		expect(clamp.get()).toEqual(max.get());
	});
	it("should work with parameters of type float", () => {
		const min = new Const(0);
		const max = new Const(1);

		const value = new Const(4);

		const clamp = new Clamp(value, min, max);

		expect(clamp.get()).toEqual(max.get());
	});
	it("should work with parameters of type float2", () => {
		const min = new Const(new float2(0 ,0));
		const max = new Const(new float2(1, 1));

		const clamp0 = new Clamp(new Const(new float2(.5, .5)), min, max);
		const clamp1 = new Clamp(new Const(new float2(2, 2)), min, max);
		const clamp2 = new Clamp(new Const(new float2(-2, -2)), min, max);

		expect(clamp0.get()).toEqual(new float2(.5, .5));
		expect(clamp1.get()).toEqual(max.get());
		expect(clamp2.get()).toEqual(min.get());
	});
});
