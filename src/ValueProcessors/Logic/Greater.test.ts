import {Greater} from "./Greater";
import {Const} from "../Base";
import {float2} from "../../Primitives";

describe("class Greater", () => {
	it("should compare two primitives that implement the IOpEquals interface", () => {
		const eq = new Greater(new Const(new float2(1, 1)), new Const(new float2(0, 0)));

		expect(eq.get()).toBeTruthy();
	});
	it("should compare two primitives that don't implement the IOpEquals interface", () => {
		const eq = new Greater(new Const(1), new Const(0));

		expect(eq.get()).toBeTruthy();
	});
});