import {Const} from "../Base";
import "./index";
import {Observe} from "../General/Observe";

describe("function log", () => {
	const source = new Const(0);
	it("should return an instance of type Observe", () => {
		const result = source.log();

		expect(result).toBeInstanceOf(Observe);
		expect((result as any).observer).toBe(console.log);
	});
});

describe("function warn", () => {
	const source = new Const(0);
	it("should return an instance of type Observe", () => {
		const result = source.warn();

		expect(result).toBeInstanceOf(Observe);
		expect((result as any).observer).toBe(console.warn);
	});
});

describe("function error", () => {
	const source = new Const(0);
	it("should return an instance of type Observe", () => {
		const result = source.error();

		expect(result).toBeInstanceOf(Observe);
		expect((result as any).observer).toBe(console.error);
	});
});