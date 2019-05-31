import {Const, Var} from "../Base";
import "./index";
import {FeedInto} from "../FeedInto";

describe("function feedInto", () => {
	const source = new Const(0);
	it("should return an instance of type FeedInto", () => {
		const result = source.feedInto(new Var(0));

		expect(result).toBeInstanceOf(FeedInto);
	});
});