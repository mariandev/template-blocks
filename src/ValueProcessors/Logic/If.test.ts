import {Const} from "../Base";
import {If} from "./If";

describe("class In", () => {
	const trueBranch = new Const(1);
	const falseBranch = new Const(0);

	it("should return the true branch if the expression is true", () => {
		const expression = new Const(true);
		const theIf = new If(expression, trueBranch, falseBranch);

		expect(theIf.get()).toBe(trueBranch.get());
	});
	it("should return the false branch if the expression is false", () => {
		const expression = new Const(false);
		const theIf = new If(expression, trueBranch, falseBranch);

		expect(theIf.get()).toBe(falseBranch.get());
	});
});