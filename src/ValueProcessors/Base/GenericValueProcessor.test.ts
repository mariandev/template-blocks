import {GenericValueProcessor} from "./GenericValueProcessor";

describe("class GenericValueProcessor", () => {
	const implementation = (a: number) => a * 2;

	it("should create a new instance of the class with the specified implementation", () => {
		const result = new GenericValueProcessor(implementation, 0);

		expect(result.implementation).toBe(implementation);
	});
	it("should create a new constructor with the specified implementation using the new static method", () => {
		const Double = GenericValueProcessor.new(implementation);

		const result = new Double();

		expect(result.implementation).toBe(implementation);
	});
	it("should use the implementation when the gem method is called", () => {
		const Double = GenericValueProcessor.new(implementation);

		const value = 5;

		const result = new Double(value);

		expect(result.get()).toBe(implementation(value));
	});
});