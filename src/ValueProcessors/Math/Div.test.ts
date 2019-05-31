import {Const} from "../Base";
import {Div} from "./Div";

describe("class Div", () => {
	it("should divide the values from the provided two processors", () => {
		const one = new Const(1);
		const two = new Const(2);

		const result = new Div(one, two);
		const expected_result = .5;

		expect(result.get()).toEqual(expected_result);
	});

	it("should return the result of 1 over the provided value", () => {
		const value = new Const(2);

		const result = Div.OneOver(value);
		const expected_result = .5;

		expect(result).toBeInstanceOf(Div);
		expect(result.get()).toEqual(expected_result);
	});
});