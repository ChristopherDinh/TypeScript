"use strict";
exports.__esModule = true;
var user = /** @class */ (function () {
    function user(userName, password, firstName, lastName) {
        this.userName = userName;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    user.prototype.about = function () {
        return "ID = " + this.id + ", User Name = " + this.userName + ", Password = " + this.password + ", First Name = " + this.firstName + ", Last Name = " + this.lastName;
    };
    return user;
}());
exports.user = user;
