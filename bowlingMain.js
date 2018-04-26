"use strict";
exports.__esModule = true;
var bowling_1 = require("./bowling");
var score;
var frames;
for (var i = 0; i = 10; i++) {
    var x = Math.random() * 11;
    var y = Math.random() * 11;
    if (x + y > 10) {
        var x_1 = Math.random() * 11;
        var y_1 = Math.random() * 11;
        break;
    }
    else if (x + y == 10 && x == 10) {
        score = x + y;
        var i_1 = new bowling_1.bowling(10, 0, score);
    }
    else if (x + y == 10) {
        score = score + score;
        var i_2 = new bowling_1.bowling(x, y, score);
    }
}
for (var _i = 0, frames_1 = frames; _i < frames_1.length; _i++) {
    var j = frames_1[_i];
    console.log(j.about());
}
