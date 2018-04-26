"use strict";
exports.__esModule = true;
var user_1 = require("./user");
var user_service_1 = require("./user.service");
var userComponet = /** @class */ (function () {
    function userComponet(uSvc) {
        this.us = uSvc;
        console.log("User Componet Start");
    }
    return userComponet;
}());
exports.userComponet = userComponet;
var userComp = new userComponet(new user_service_1.userService());
var u1 = new user_1.user("cdinh", "password", "Christopher", "Dinh");
userComp.us.add(u1);
var u2 = new user_1.user("admin", "admin", "admin", "admin");
userComp.us.add(u2);
var u3 = new user_1.user("user1", "password", "user", "1");
userComp.us.add(u3);
for (var _i = 0, _a = userComp.us.list(); _i < _a.length; _i++) {
    var user_2 = _a[_i];
    console.log(user_2.about());
}
console.log("Removing Users!!!");
userComp.us.remove(u2.id);
for (var _b = 0, _c = userComp.us.list(); _b < _c.length; _b++) {
    var user_3 = _c[_b];
    console.log(user_3.about());
}
