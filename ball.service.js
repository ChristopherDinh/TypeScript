"use strict";
exports.__esModule = true;
var ballService = /** @class */ (function () {
    function ballService() {
        this.ballList = [];
        this.nextId = 1;
    }
    ballService.prototype.add = function (ball) {
        ball.id = this.nextId++;
        this.ballList.push(ball);
        return "sucess";
    };
    ballService.prototype.list = function () {
        return this.ballList;
    };
    ballService.prototype.remove = function (id) {
        var index = -1;
        for (var idx = 0; idx < this.ballList.length; idx++) {
            if (id == this.ballList[idx].id) {
                index = idx;
                break;
            }
        }
        this.ballList.splice(index, 1);
        return "Removed";
    };
    return ballService;
}());
exports.ballService = ballService;
