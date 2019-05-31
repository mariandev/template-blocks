import {Const} from "../Base";
import {Mod} from "./Mod";

describe("class Mod", () => {
	it("should return the modulus of the values from the provided two processors", () => {
		const one = new Const(4);
		const two = new Const(2);

		const result = new Mod(one, two);
		const expected_result = 0;

		expect(result.get()).toEqual(expected_result);
	});
});