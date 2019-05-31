import {Const} from "../../Base";
import {ToFloat2} from "./ToFloat2";
import {float2} from "../../../Primitives";

describe("class ToFloat2", () => {
	const x = new Const(1);
	const y = new Const(2);

	it("should return an instance of type ToFloat2", () => {
		const f2 = new ToFloat2(x, y);

		expect(f2).toBeInstanceOf(ToFloat2);
	});
	it("should populate both x any why with the x processor value whe only x is given", () => {
		const f2 = new ToFloat2(x);

		const result = f2.get();

		expect(result.x).toBe(x.get());
		expect(result.y).toBe(x.get());
	});
	it("should return a float2 on the get method", () => {
		const f2 = new ToFloat2(x, y);

		const result = f2.get();

		expect(result).toBeInstanceOf(float2);
		expect(result.x).toBe(x.get());
		expect(result.y).toBe(y.get());
	});
	it("should return a new instance of float2 on the get method each time", () => {
		const f2 = new ToFloat2(x, y);

		const result1 = f2.get();
		const result2 = f2.get();

		expect(result1).not.toBe(result2);
	});
});