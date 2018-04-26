"use strict";
exports.__esModule = true;
var bowling = /** @class */ (function () {
    function bowling(first, second, score) {
        this.first = first;
        this.second = second;
        this.score = score;
    }
    bowling.prototype.about = function () {
        return "Throw 1: first=" + this.first + ", Throw 2: second=" + this.second + ", score=" + (this.first + this.second);
    };
    return bowling;
}());
exports.bowling = bowling;
