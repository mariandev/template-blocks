import {float2} from "../../Primitives";
import {DoOp} from "./DoOp";

describe("function DoOp", () => {
	const f1 = 0;
	const f2_1 = new float2(1, 2);
	const f2_2 = new float2(3, 4);
	const op_gen = () => jest.fn().mockReturnValue(true);

	it("should do the operation with two parameters of type float", () => {
		const op = op_gen();
		const result = DoOp(f1, f1, op);

		expect(result).toBeTruthy();
		expect(op).toHaveBeenCalledTimes(1);
		expect(op).toHaveBeenCalledWith(f1, f1);
	});
	it("should do the operation with two parameters of type float2", () => {
		const op = op_gen();
		const result = DoOp(f2_1, f2_2, op);

		expect(result).toBeTruthy();
		expect(op).toHaveBeenCalledTimes(2);
		expect(op).toHaveBeenNthCalledWith(1, f2_1.x, f2_2.x);
		expect(op).toHaveBeenNthCalledWith(2, f2_1.y, f2_2.y);
	});
	it("should do the operation with the parameter of type float and the second float2", () => {
		const op = op_gen();
		const result = DoOp(f1, f2_2, op);

		expect(result).toBeTruthy();
		expect(op).toHaveBeenCalledTimes(2);
		expect(op).toHaveBeenNthCalledWith(1, f1, f2_2.x);
		expect(op).toHaveBeenNthCalledWith(2, f1, f2_2.y);
	});
	it("should do the operation with the parameter of type float2 and the second float", () => {
		const op = op_gen();
		const result = DoOp(f2_1, f1, op);

		expect(result).toBeTruthy();
		expect(op).toHaveBeenCalledTimes(2);
		expect(op).toHaveBeenNthCalledWith(1, f2_1.x, f1);
		expect(op).toHaveBeenNthCalledWith(2, f2_1.y, f1);
	});
});