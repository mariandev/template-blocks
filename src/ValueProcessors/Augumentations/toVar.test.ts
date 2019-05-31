import {Const, Var} from "../Base";
import "./index";

describe("function toVar", () => {
	const source = new Const(0);
	it("should return an instance of type Var", () => {
		const result = source.toVar();

		expect(result).toBeInstanceOf(Var);
	});
});