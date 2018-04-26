"use strict";
exports.__esModule = true;
var game = /** @class */ (function () {
    function game(die, total, rolls, average) {
        this.die = die;
        this.total = total;
        this.rolls = rolls;
        this.average = average;
    }
    game.prototype.about = function () {
        return "Pig Dice: Total Score=" + this.total + ", Number of Rolls=" + this.rolls + ", Average Score per Roll=" + this.average;
    };
    return game;
}());
exports.game = game;
