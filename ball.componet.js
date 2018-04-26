"use strict";
exports.__esModule = true;
var ball_1 = require("./ball");
var ball_service_1 = require("./ball.service");
var ballComponet = /** @class */ (function () {
    function ballComponet(bSvc) {
        this.ballSvc = bSvc;
        console.log("Ball Componet Initialize");
    }
    return ballComponet;
}());
exports.ballComponet = ballComponet;
var ballComp = new ballComponet(new ball_service_1.ballService());
var b1 = new ball_1.ball("blue", "small");
ballComp.ballSvc.add(b1);
var b2 = new ball_1.ball("red", "large");
ballComp.ballSvc.add(b2);
var b3 = new ball_1.ball("green", "small");
ballComp.ballSvc.add(b3);
for (var _i = 0, _a = ballComp.ballSvc.list(); _i < _a.length; _i++) {
    var ball_2 = _a[_i];
    console.log(ball_2.about());
}
console.log("remove an item");
ballComp.ballSvc.remove(b2.id);
for (var _b = 0, _c = ballComp.ballSvc.list(); _b < _c.length; _b++) {
    var ball_3 = _c[_b];
    console.log(ball_3.about());
}
