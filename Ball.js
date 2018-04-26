"use strict";
exports.__esModule = true;
var ball = /** @class */ (function () {
    function ball(inColor, inSize) {
        this.color = inColor;
        this.size = inSize;
    }
    //doesn't need getters and setters because properties are public
    ball.prototype.about = function () {
        return "Ball: id=" + this.id + ", color=" + this.color + ", size=" + this.size;
    };
    return ball;
}());
exports.ball = ball;
