"use strict";
exports.__esModule = true;
var Friends_1 = require("./Friends");
var f1 = new Friends_1.Friends("Ann", 27, "ann@ann.com", true);
var f2 = new Friends_1.Friends("Bill", 27, "bill@bill.com", false);
var fArray = [f1, f2];
for (var _i = 0, fArray_1 = fArray; _i < fArray_1.length; _i++) {
    var names = fArray_1[_i];
    console.log(names.about());
}
