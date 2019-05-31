import {Random} from "./Random";

describe("class Random", () => {
	it("should return a number between 0 and 1 on the get method", () => {
		const result = new Random().get();

		expect(typeof result).toBe("number");
		expect(result >= 0).toBeTruthy();
		expect(result < 1).toBeTruthy();
	})
});