import {Const} from "../Base";
import "./index";
import {Observe} from "../General/Observe";

describe("function observe", () => {
	const source = new Const(0);
	it("should return an instance of type Observe", () => {
		const result = source.observe(() => {});

		expect(result).toBeInstanceOf(Observe);
	});
});