import {Var} from ".";

describe("Var", () => {
	it("should create a new instance containing the primitive value when the constructor is called", () => {
		const value = true;
		const theVar = new Var(value);

		expect(theVar).toBeDefined();
		expect(theVar.get()).toBe(value);
	});

	it("should create a new instance containing the ValueProcessor's value when the constructor is called", () => {
		const value = 5;
		const valueProcessor = new Var(value);
		const theVar = new Var(valueProcessor);

		expect(theVar).toBeDefined();
		expect(theVar.get()).toBe(value);
	});

	it("should change the value when the set method is called", () => {
		const baseValue = "base value";
		const newValue = "new value";

		const theVar = new Var(baseValue);

		expect(theVar.get()).toBe(baseValue);

		theVar.set(newValue);

		expect(theVar.get()).toBe(newValue);
	});

	it("should create a new instance when the static of method is called with a primitive", () => {
		const value = {a: 1};

		const theVar = new Var.ofRaw(value);

		expect(theVar).toBeDefined();
		expect(theVar.get()).toBe(value);
	});

	it("should create a new instance when the static of method is called with a ValueProcessor", () => {
		const value = {a: 1};
		const valueProcessor = new Var(value);

		const theVar = new Var.ofRaw(valueProcessor);

		expect(theVar).toBeDefined();
		expect(theVar.get()).toBe(valueProcessor);
	});
});