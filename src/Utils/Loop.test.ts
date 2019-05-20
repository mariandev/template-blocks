import {Loop} from "./Loop";
import {DeltaTime} from "../ValueProcessors";

describe("class Loop", () => {
	let loop: Loop;

	beforeEach(() => {
		loop = new Loop();

		(loop as any)._dt = {
			get: jest.fn(),
			reset: jest.fn(),
		};

		(loop as any).raf = jest.fn();
	});

	it("should create a new instance when the constructor is called", () => {
		const loop_pure = new Loop();

		expect(loop_pure).toBeDefined();
		expect(loop_pure).toBeInstanceOf(Loop);
		expect(loop_pure.dt).toBeInstanceOf(DeltaTime);
	});
	it("should not be running by default", () => {
		expect(loop.isRunning).toBeFalsy();
	});
	it("should start running when the 'start' method is called", () => {
		loop.start();
		expect(loop.isRunning).toBeTruthy();
	});
	it("should stop running when the 'stop' method is called", () => {
		loop.start().stop();
		expect(loop.isRunning).toBeFalsy();
	});
	it("should do nothing if it's running and the 'start' method is called", () => {
		(loop as any).loop = jest.fn();

		loop.start();
		loop.start();
		expect((loop as any).loop).toHaveBeenCalledTimes(1);
	});
	it("should register a listener", () => {
		const listener = () => {};

		loop.register(listener);

		expect((loop as any)._listeners).toContain(listener);
	});
	it("should unregister a listener", () => {
		const listener = () => {};

		loop.register(listener);
		loop.unregister(listener);

		expect((loop as any)._listeners).not.toContain(listener);
	});
	it("should register a listener only once", () => {
		const listener = () => {};

		loop.register(listener);
		loop.register(listener);

		expect((loop as any)._listeners).toEqual([listener]);
	});
	it("should trigger the listeners while looping", () => {
		const listener = jest.fn();

		loop.register(listener);
		loop.start();

		expect(listener).toHaveBeenCalledTimes(1);
	});
});