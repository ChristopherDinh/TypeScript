"use strict";
exports.__esModule = true;
var Friends = /** @class */ (function () {
    function Friends(Name, Age, Email, BestFriend) {
        this.Name = Name;
        this.Age = Age;
        this.Email = Email;
        this.BestFriend = BestFriend;
    }
    Friends.prototype.about = function () {
        return "Friends: Name=" + this.Name + ", Age=" + this.Age + ", Email=" + this.Email + ", BestFriend=" + (this.BestFriend ? "Yes" : "No");
    };
    return Friends;
}());
exports.Friends = Friends;
