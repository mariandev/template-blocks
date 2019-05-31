import {float2} from "./float2";

describe("class float2", () => {
    it("should fill the y value with the x value if it's not specified", () => {
        const vec = new float2(1);

        expect(vec.x).toEqual(1);
        expect(vec.y).toEqual(1);
    });
    it("should return the squared magnitude of the float2", () => {
        const vec = new float2(1, 0);

        const expected_result = 1;

        expect(vec.sqrMagnitude).toEqual(expected_result);
    });
    it("should not calculate the squared magnitude more than once", () => {
        const vec = new float2(1, 0);

        expect(vec.sqrMagnitude).toEqual(1);

        (vec as any)._sqrMagnitude = 0;

        vec.sqrMagnitude;

        expect(vec.sqrMagnitude).toEqual(0);
    });
    it("should return the magnitude of the float2", () => {
        const vec = new float2(1, 0);

        const expected_result = 1;

        expect(vec.magnitude).toEqual(expected_result);
    });
    it("should not calculate the magnitude more than once", () => {
        const vec = new float2(1, 0);

        expect(vec.magnitude).toEqual(1);

        (vec as any)._magnitude = 0;

        vec.magnitude;

        expect(vec.magnitude).toEqual(0);
    });
    it("should return the angle of the float2", () => {
        const vec = new float2(0, 1);

        const expected_result = Math.PI / 2;

        expect(vec.angle).toEqual(expected_result);
    });
    it("should not calculate the angle more than once", () => {
        const vec = new float2(0, 1);

        expect(vec.angle).toEqual(Math.PI / 2);

        (vec as any)._angle = 0;

        vec.angle;

        expect(vec.angle).toEqual(0);
    });
    it("should add the provided float2 and return a new instance", () => {
        const vec1 = new float2(1, 2);
        const vec2 = new float2(3, 4);

        const vec3 = vec1.add(vec2);

        expect(vec3).toBeDefined();
        expect(vec3.x).toEqual(4);
        expect(vec3.y).toEqual(6);
    });
    it("should subtract the provided float2 and return a new instance", () => {
        const vec1 = new float2(1, 2);
        const vec2 = new float2(3, 5);

        const vec3 = vec1.sub(vec2);

        expect(vec3).toBeDefined();
        expect(vec3.x).toEqual(-2);
        expect(vec3.y).toEqual(-3);
    });
    it("should multiply with the provided float and return a new instance", () => {
        const vec1 = new float2(1, 2);
        const scalar = 3;

        const vec3 = vec1.mul(scalar);

        expect(vec3).toBeDefined();
        expect(vec3.x).toEqual(3);
        expect(vec3.y).toEqual(6);
    });
    it("should multiply with the provided float2 and return a new instance", () => {
        const vec1 = new float2(1, 2);
        const vec2 = new float2(3, 4);

        const vec3 = vec1.mul(vec2);

        expect(vec3).toBeDefined();
        expect(vec3.x).toEqual(3);
        expect(vec3.y).toEqual(8);
    });
    it("should divide by the provided float and return a new instance", () => {
        const vec1 = new float2(8, 16);
        const scalar = 4;

        const vec3 = vec1.div(scalar);

        expect(vec3).toBeDefined();
        expect(vec3.x).toEqual(2);
        expect(vec3.y).toEqual(4);
    });
    it("should divide by the provided float2 and return a new instance", () => {
        const vec1 = new float2(2, 6);
        const vec2 = new float2(2, 3);

        const vec3 = vec1.div(vec2);

        expect(vec3).toBeDefined();
        expect(vec3.x).toEqual(1);
        expect(vec3.y).toEqual(2);
    });
    it("should return the dot product", () => {
        const vec1 = new float2(1, 0);
        const vec2 = new float2(-1, 0);

        const vec3 = vec1.dot(vec2);

        expect(vec3).toEqual(-1);
    });
    it("should return a rotated float2 by the specified amount", () => {
        const vec1 = new float2(2, 0);
        const vec2 = vec1.rotate(90);

        expect(vec2).toBeDefined();
        expect(vec2.x).toBeCloseTo(0);
        expect(vec2.y).toBeCloseTo(2);
    });
    it("should return a string representation of the float2", () => {
        const vec = new float2(1, 2);
        const expected_result = "float2(1, 2)";

        expect(vec.toString()).toEqual(expected_result);
    });
    it("should create a new instance of float2 with the same values", () => {
        const vec1 = new float2(1, 2);
        const vec2 = vec1.clone();

        expect(vec2).not.toBe(vec1);
        expect(vec2.x).toEqual(vec1.x);
        expect(vec2.y).toEqual(vec1.y);
    });
    it("should return true if the two float2 are equal", () => {
        const vec1 = new float2(1, 2);
        const vec2 = new float2(1, 2);

        expect(vec2).not.toBe(vec1);
        expect(vec2.x).toEqual(vec1.x);
        expect(vec2.y).toEqual(vec1.y);
        expect(vec1.equals(vec2)).toBeTruthy();
    });
    it("should return true if the instance if greater the the provided float2", () => {
        const vec1 = new float2(0, 2);
        const vec2 = new float2(0, 1);

        expect(vec1.greater(vec2)).toBeTruthy();
    });

    // STATIC
    it("should return an instance of float2 ith the values (0, 0)", () => {
        const vec = float2.zero;

        expect(vec).toBeInstanceOf(float2);
        expect(vec.x).toEqual(0);
        expect(vec.y).toEqual(0);
    });
    it("should return an instance of float2 ith the values (1, 1)", () => {
        const vec = float2.one;

        expect(vec).toBeInstanceOf(float2);
        expect(vec.x).toEqual(1);
        expect(vec.y).toEqual(1);
    });
    it("should return an instance of float2 ith the values (0, 1)", () => {
        const vec = float2.up;

        expect(vec).toBeInstanceOf(float2);
        expect(vec.x).toEqual(0);
        expect(vec.y).toEqual(1);
    });
    it("should return an instance of float2 ith the values (0, -1)", () => {
        const vec = float2.down;

        expect(vec).toBeInstanceOf(float2);
        expect(vec.x).toEqual(0);
        expect(vec.y).toEqual(-1);
    });
    it("should return an instance of float2 ith the values (-1, 0)", () => {
        const vec = float2.left;

        expect(vec).toBeInstanceOf(float2);
        expect(vec.x).toEqual(-1);
        expect(vec.y).toEqual(0);
    });
    it("should return an instance of float2 ith the values (1, 0)", () => {
        const vec = float2.right;

        expect(vec).toBeInstanceOf(float2);
        expect(vec.x).toEqual(1);
        expect(vec.y).toEqual(0);
    });
});
