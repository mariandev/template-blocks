import {AnyFloat, float, float2} from "../../Primitives";

export function DoOp<T extends AnyFloat>(one: AnyFloat, two: AnyFloat, op: (one: float, two: float) => float): T {
	const oneFloat2 = one instanceof float2;
	const twoFloat2 = two instanceof float2;

	if(oneFloat2 && twoFloat2) {
		return new float2(
			op((one as float2).x, (two as float2).x),
			op((one as float2).y, (two as float2).y)
		) as T;
	} else if(oneFloat2) {
		return new float2(
			op((one as float2).x, (two as float)),
			op((one as float2).y, (two as float))
		) as T;
	} else if(twoFloat2) {
		return new float2(
			op((one as float), (two as float2).x),
			op((one as float), (two as float2).y)
		) as T;
	} else {
		return op((one as float), (two as float)) as T;
	}
}