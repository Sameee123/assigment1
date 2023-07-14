var users = [];
if (users.length > 0) {
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        if (user === 'admin') {
            console.log("heloo sam, you would like to see report ");
        }
        else {
            console.log("heeloo" + user.charAt(0).toUpperCase() + user.slice(1) + "thanks for logging again");
        }
    }
}
else {
    console.log("we find some user");
}
