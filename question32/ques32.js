var current_users = ["sameer", "yousaf", "zahid", "shahid", "saad"];
var new_users = ["shahid", "zahid ", "wahid", "waleed", "murshad"];
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var user = new_users_1[_i];
    var lowercase_user = user.toLowerCase();
    if (current_users_lower.includes(lowercase_user)) {
        console.log("sorry, the username '".concat(user, "' is already taken: please enter new one "));
    }
    else {
        console.log("the username'".concat(user, "' is aviable"));
    }
}
