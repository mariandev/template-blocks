import {Const} from "../Base";
import {Execute, Executor} from "./Execute";

describe("class Execute", () => {
	const source = new Const(5);

	it("should return anew instance of type Execute", () => {
		const executor = jest.fn();
		const execute = new Execute(source, executor);

		expect(execute).toBeInstanceOf(Execute);
		expect((execute as any).source).toBe(source);
		expect((execute as any).executor).toBe(executor);
	});
	it("should execute the executor function", () => {
		const spy = jest.fn();
		const executor: Executor<number, number> = s => {
			spy(s);
			return s;
		};
		const execute = new Execute(source, executor);

		expect(spy).not.toHaveBeenCalled();

		execute.get();

		expect(spy).toHaveBeenCalledTimes(1);
		expect(spy).toHaveBeenCalledWith(source);
	});
	it("should return the new value", () => {
		const executor: Executor<number, string> = s => {
			return new Const(s.get().toString());
		};
		const execute = new Execute(source, executor);

		const result = execute.get();
		const expected_result = source.get().toString();

		expect(result).toBe(expected_result);
	});
});