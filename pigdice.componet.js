"use strict";
exports.__esModule = true;
var game_1 = require("./game");
var g1 = new game_1.game(0, 0, 0, 0);
g1.die = (Math.floor(Math.random() * 6)) + 1;
var two = 0;
var three = 0;
var four = 0;
var five = 0;
var six = 0;
while (g1.die != 1) {
    g1.total = g1.die + g1.total;
    g1.rolls = g1.rolls + 1;
    g1.average = Math.round(g1.total / g1.rolls);
    if (g1.die == 2) {
        two += 1;
    }
    else if (g1.die == 3) {
        three += 1;
    }
    else if (g1.die == 4) {
        four += 1;
    }
    else if (g1.die == 5) {
        five += 1;
    }
    else if (g1.die == 6) {
        six += 1;
    }
    g1.die = (Math.floor(Math.random() * 6)) + 1;
}
console.log(g1.about());
console.log("Number of two's rolled =" + two + "\nNumber of three's rolled =" + three + "\nNumber of four's rolled =" + four + "\nNumber of five's rolled =" + five + "\nNumber of six's rolled =" + six);
