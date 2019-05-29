import {EvaluatePeriodically} from "./EvaluatePeriodically";
import {Var} from "./Base";
import {Loop} from "../Utils";

describe("class EvaluatePeriodically", () => {
	let loop: Loop;
	const value = new Var(5);

	beforeEach(() => {
		loop = new Loop();

		(loop as any).raf = jest.fn();
	});

	it("should create a new instance of with the specified Loop", () => {
		const ep = new EvaluatePeriodically(value, loop);

		expect((ep as any)._loop).toBe(loop);
	});
	it("should create a new instance with the specified timer value", () => {
		const time = 2;

		const ep = new EvaluatePeriodically(value, time);

		expect((ep as any)._time).toBe(time);
	});
	it("should be enabled by default", () => {
		const ep = new EvaluatePeriodically(value, loop);

		expect((loop as any)._listeners).toContain((ep as any)._listener);
	});
	it("should remove the listener from the loop when the disable method is called", () => {
		const ep = new EvaluatePeriodically(value, loop);

		ep.disable();

		expect((loop as any)._listeners).not.toContain((ep as any)._listener);
	});
	it("should add the listener to the loop when the enable method is called", () => {
		const ep = new EvaluatePeriodically(value, loop);

		ep.disable();
		ep.enable();

		expect((loop as any)._listeners).toContain((ep as any)._listener);
	});
});