import {Const} from "../Base";
import {Pow} from "./Pow";

describe("class Pow", () => {
	it("should raise the first value to the second one provided", () => {
		const one = new Const(2);
		const two = new Const(3);

		const result = new Pow(one, two);
		const expected_result = 8;

		expect(result.get()).toEqual(expected_result);
	});
});