import {Const} from "../Base";
import "./index";
import {Execute} from "../General/Execute";

describe("function execute", () => {
	const source = new Const(0);
	it("should return an instance of type Execute", () => {
		const result = source.execute(s => s);

		expect(result).toBeInstanceOf(Execute);
	});
});