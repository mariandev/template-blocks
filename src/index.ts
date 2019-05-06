// import {
// 	GetMousePosition,
// 	GetPercent,
// 	GetWindowSize,
// 	float2,
// 	Const,
// 	Remap,
// 	Mul,
// 	Sub,
// 	Clamp,
// 	Timer,
// 	GetScale, Timestamp, AnyFloat, Add, Pow, Div, If, Var
// } from "./lib";
// import {DeltaTime} from "./lib/ValueProcessors/DeltaTime";
// import {Sqrt} from "./lib/ValueProcessors/Math/Sqrt";
//
// export * from "./lib";
//
// declare const Screen1: any;
// declare const TextBox1: any;
//
// Screen1.onshow.addObserver(() => {
// 	bnt.TeadsPlayerAddons.apiProxy.addObserver(api => {
// 		if (!api) return;
//
// 		api.setSoundControlVisibility(false);
// 	});
//
// 	const ts = new Timestamp();
//
// 	const moment = new Var(ts.get());
//
// 	const timeSinceStartInSeconds = ts
// 		.pipe(Sub, moment)
// 		.pipe(Div, Const.of(1000));
//
// 	TextBox1.htmlElement.addEventListener("click", () => {
// 		moment.set(ts.get());
// 	});
//
// 	(function loop() {
// 		requestAnimationFrame(loop);
//
// 		TextBox1.update({text: timeSinceStartInSeconds.get()});
// 	})();
// });

export * from "./lib";