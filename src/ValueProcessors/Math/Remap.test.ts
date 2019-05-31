import {Const} from "../Base";
import {Remap} from "./Remap";
import {float2} from "../../Primitives";

describe("class Remap", () => {
	it("should remap the input value to the target range if the values are float", () => {
		const value = new Const(0.5);
		const fromMin = new Const(0);
		const fromMax = new Const(1);
		const toMin = new Const(0);
		const toMax = new Const(12);

		const remap = new Remap(value, fromMin, fromMax, toMin, toMax);

		expect(remap.get()).toEqual(6);
	});
	it("should remap the input value to the target range if the values are float2", () => {
		const value = new Const(new float2(0.5));
		const fromMin = new Const(new float2(0));
		const fromMax = new Const(new float2(1));
		const toMin = new Const(new float2(0));
		const toMax = new Const(new float2(12));

		const remap = new Remap(value, fromMin, fromMax, toMin, toMax);

		expect(remap.get()).toEqual(new float2(6));
	});
});
