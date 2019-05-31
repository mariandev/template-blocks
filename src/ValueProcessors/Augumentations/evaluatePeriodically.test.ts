import {Const} from "../Base";
import "./index";
import {EvaluatePeriodically} from "../EvaluatePeriodically";
import {Loop} from "../../Utils";

describe("function evaluatePeriodically", () => {
	const source = new Const(0);

	it("should return a new instance of type EvaluatePeriodically with number parameter", () => {
		const result = source.evaluatePeriodically(1);

		expect(result).toBeInstanceOf(EvaluatePeriodically);
	});

	it("should return a new instance of type EvaluatePeriodically with Loop parameter", () => {
		const loop = new Loop();
		const result = source.evaluatePeriodically(loop);

		expect(result).toBeInstanceOf(EvaluatePeriodically);
	});
});