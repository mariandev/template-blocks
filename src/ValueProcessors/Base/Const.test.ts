import {Var} from "./Var";
import {Const} from "./Const";

describe("class Const", () => {
	it("should return the specified primitive value on the get method", () => {
		const value = 1;
		const block = new Const(value);

		expect(block.get()).toBe(value);
	});
	it("should return the specified processors's value on the get method", () => {
		const value = new Const(1);
		const block = new Const(value);

		expect(block.get()).toBe(value.get());
	});
	it("should shouldn't change the return value of the get method when the specified processor's value is changed", () => {
		const rawValue = 1;
		const value = new Var(rawValue);
		const block = new Const(value);

		expect(block.get()).toBe(rawValue);

		value.set(2);

		expect(block.get()).toBe(rawValue);
	});
	it("should create a new instance with the specified value without processing", () => {
		const value = new Const(1);
		const block = new Const.ofRaw(value);

		expect(block.get()).toBe(value);
	});
});