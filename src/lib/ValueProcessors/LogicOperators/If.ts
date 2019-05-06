import {ValueProcessor} from "../../ValueProcessor";

export class If<TOut> extends ValueProcessor<TOut> {
	constructor(private readonly expression: ValueProcessor<boolean>,
							private readonly ifTrue: ValueProcessor<TOut>,
							private readonly ifFalse: ValueProcessor<TOut>) {
		super();
	}

	get() {
		const expression = this.expression.get();

		return expression ? this.ifTrue.get() : this.ifFalse.get();
	}
}