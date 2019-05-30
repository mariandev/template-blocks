import {Const} from "../Base";
import {Observe} from "./Observe";

describe("class Observe", () => {
	const source = new Const(5);

	it("should create a new instance of type Observe", () => {
		const observer = jest.fn();
		const observe = new Observe(source, observer);

		expect(observe).toBeInstanceOf(Observe);
		expect((observe as any).observer).toBe(observer);
	});
	it("should trigger the observer on get", () => {
		const observer = jest.fn();
		const observe = new Observe(source, observer);

		expect(observer).not.toHaveBeenCalled();

		observe.get();

		expect(observer).toHaveBeenCalledTimes(1);
		expect(observer).toHaveBeenCalledWith(source.get());
	});
	it("should return the value unaltered", () => {
		const observer = jest.fn();
		const observe = new Observe(source, observer);

		const result = observe.get();

		expect(result).toBe(source.get());
	});
});