import {Const} from "../Base";
import {Sqrt} from "./Sqrt";
import {float2} from "../../Primitives";

describe("class Sqrt", () => {
	it("should return the square root of the provided processor's value if it's a float", () => {
		const one = new Const(4);

		const result = new Sqrt(one);
		const expected_result = 2;

		expect(result.get()).toEqual(expected_result);
	});

	it("should return the square root of the provided processor's value if it's a float2", () => {
		const one = new Const(new float2(4, 9));

		const result = new Sqrt(one);
		const expected_result = new float2(2, 3);

		expect(result.get().equals(expected_result)).toBeTruthy();
	});
});