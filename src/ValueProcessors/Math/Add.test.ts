import {Const} from "../Base";
import {Add} from "./Add";

describe("class Add", () => {
	it("should add the values from the provided two processors", () => {
		const one = new Const(1);
		const two = new Const(2);

		const result = new Add(one, two);
		const expected_result = 3;

		expect(result.get()).toEqual(expected_result);
	});
});