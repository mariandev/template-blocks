# Template Blocks

[![Build Status](https://travis-ci.com/mariandev/template-blocks.svg?branch=master)](https://travis-ci.com/mariandev/template-blocks)
[![Coverage Status](https://coveralls.io/repos/github/mariandev/template-blocks/badge.svg?branch=master)](https://coveralls.io/github/mariandev/template-blocks?branch=master)

### Examples
#### Basic example
```javascript
// Timestamp generator
const ts = new Timestamp();

// A snapshot of the current timestamp
const snapshot = ts.get();

// A constant containing the previous snapshot
const now = new Const(snapshot);

// The time since the code was executed
const delta = new Diff(ts, now);

setInterval(function() {
    console.log(delta.get());
}, 500);
```


#### Basic example - compact writing
```javascript
// Timestamp generator
const ts = new Timestamp();

// The time since the code was executed
const delta = ts.pipe(Diff, ts.toConst());

setInterval(function() {
    console.log(delta.get());
}, 500);
```

#### Advanced example
```javascript
const loop = new Loop();

const mousePosition = new GetMousePosition();
const mousePositionSnapshot = mousePosition.toVar();

const mouseMoving = new Var(false)
	.execute(function() {
		const snapshot = mousePosition.toConst();
		const equal = snapshot.pipe(Equals, mousePositionSnapshot);
		mousePositionSnapshot.set(snapshot);
		return equal;
	})
	.evaluatePeriodically(loop);

const lightIntensity = new Var(0)
	.execute(function(ref) {
		return ref
			.pipe(
				Add,
				new If(mouseMoving, new Const(1), new Const(-1))
					.pipe(Mul, new Const(4))
					.pipe(Mul, loop.dt)
			)
			.pipe(Clamp, new Const(0), new Const(1));
	})
	.observe(console.log)
	.evaluatePeriodically(loop);
```
