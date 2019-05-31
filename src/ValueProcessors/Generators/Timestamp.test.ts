import {Timestamp} from "./Timestamp";

describe("class Timestamp", () => {
	it("should return a number on the get method", () => {
		const result = new Timestamp().get();

		expect(typeof result).toBe("number");
	})
});