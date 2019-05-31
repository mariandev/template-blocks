import {Const} from "../Base";
import {Sub} from "./Sub";

describe("class Sub", () => {
	it("should subtract the second value from the fist value from the two provided processors", () => {
		const one = new Const(1);
		const two = new Const(2);

		const result = new Sub(one, two);
		const expected_result = -1;

		expect(result.get()).toEqual(expected_result);
	});

	it("should return the result of 1 minus the provided value", () => {
		const value = new Const(8);

		const result = Sub.OneMinus(value);
		const expected_result = -7;

		expect(result).toBeInstanceOf(Sub);
		expect(result.get()).toEqual(expected_result);
	});
});