# Template Blocks

[![Build Status](https://travis-ci.com/mariandev/template-blocks.svg?branch=master)](https://travis-ci.com/mariandev/template-blocks)
[![Coverage Status](https://coveralls.io/repos/github/mariandev/template-blocks/badge.svg?branch=feat/test-coverage)](https://coveralls.io/github/mariandev/template-blocks?branch=master)

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
});
```


#### Basic example - compact writing
```javascript
// Timestamp generator
const ts = new Timestamp();

// The time since the code was executed
const delta = ts.pipe(Diff, new Const(ts.get()));

setInterval(function() {
    console.log(delta.get());
});
```

#### Advanced example
```javascript
// Get mouse position
const mousePosition = new GetMousePosition();
let mouseSnapshot = mousePosition.get();

const mouseMoving = new Var(false);

// Delta time
const dtSource = new DeltaTime();
const dt = new Var(dtSource.get());

// Light intensity
const lightIntensity = new Var(0);
// Node that calculates the next intensity value
const lightIntensityCalculator = lightIntensity
  .pipe(
  	Add,
  	new If(mouseMoving, Const.of(1), Const.of(-1))
  	  .pipe(Mul, Const.of(4))
  	  .pipe(Mul, dt)
  )
  .pipe(Clamp, Const.of(0), Const.of(1));

(function loop() {
	requestAnimationFrame(loop);
	
	// Set delta time variable for other nodes to use
	dt.set(dtSource.get());
	
	// Set mouseMoving variable for other noodes to use
	const _mouseSnapshot = mousePosition.get();
	mouseMoving.set(!mouseSnapshot.equals(_mouseSnapshot));
	mouseSnapshot = _mouseSnapshot;
	
	// Set the new value of the light intensity
	lightIntensity.set(lightIntensityCalculator.get());
	
	// Output the light intensity
	console.log(lightIntensity.get());
})();
```
