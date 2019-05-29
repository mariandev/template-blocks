import {Var} from "./Base";
import {FeedInto} from "./FeedInto";

describe("class FeedInto", () => {
	it("should create a new instance of type FeedInto", () => {
		const source = new Var(1);
		const target = new Var(2);
		const feedInto = new FeedInto(source, target);

		expect(feedInto).toBeInstanceOf(FeedInto);
		expect(feedInto.source).toBe(source);
		expect(feedInto.target).toBe(target);
	});
	it("should set the value from the source into the target", () => {
		const feedInto = new FeedInto(new Var(1), new Var(2));

		expect(feedInto.source.get()).not.toBe(feedInto.target.get());

		const result = feedInto.get();

		expect(result).toBe(feedInto.source.get());
		expect(feedInto.source.get()).toBe(feedInto.target.get());
	});
});
