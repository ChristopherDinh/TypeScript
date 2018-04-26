"use strict";
exports.__esModule = true;
var Ball = /** @class */ (function () {
    function Ball(inId, inColor, inSize) {
        this.id = inId;
        this.color = inColor;
        this.size = inSize;
    }
    //doesn't need getters and setters because properties are public
    Ball.prototype.about = function () {
        return "Ball: id=" + this.id + ", color=" + this.color + ", size=" + this.size;
    };
    return Ball;
}());
exports.Ball = Ball;