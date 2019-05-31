import {Const} from "../Base";
import {Mul} from "./Mul";

describe("class Mul", () => {
	it("should multiply the values from the provided two processors", () => {
		const one = new Const(3);
		const two = new Const(2);

		const result = new Mul(one, two);
		const expected_result = 6;

		expect(result.get()).toEqual(expected_result);
	});
});