import {Const} from "../Base";
import "./index";

describe("function toConst", () => {
	const source = new Const(0);
	it("should return an instance of type Const", () => {
		const result = source.toConst();

		expect(result).toBeInstanceOf(Const);
		expect(result).not.toBe(source);
	});
});