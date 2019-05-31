import {Equals} from "./Equals";
import {Const} from "../Base";
import {float2} from "../../Primitives";

describe("class Equals", () => {
	it("should compare two primitives that implement the IOpEquals interface", () => {
		const eq = new Equals(new Const(new float2(0, 0)), new Const(new float2(0, 0)));

		expect(eq.get()).toBeTruthy();
	});
	it("should compare two primitives that don't implement the IOpEquals interface", () => {
		const eq = new Equals(new Const(0), new Const(0));

		expect(eq.get()).toBeTruthy();
	});
});