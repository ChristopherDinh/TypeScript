"use strict";
exports.__esModule = true;
var userService = /** @class */ (function () {
    function userService() {
        this.userList = [];
        this.nextId = 1;
    }
    userService.prototype.add = function (user) {
        user.id = this.nextId++;
        this.userList.push(user);
        return "Sucess";
    };
    userService.prototype.list = function () {
        return this.userList;
    };
    userService.prototype.remove = function (id) {
        var index = -1;
        for (var idx = 0; idx < this.userList.length; idx++) {
            if (id == this.userList[idx].id) {
                index = idx;
                break;
            }
        }
        this.userList.splice(index, 1);
        return "Removed";
    };
    return userService;
}());
exports.userService = userService;
