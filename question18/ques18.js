var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var locations = ["japan ", "pakistan", " india"];
console.log("location", locations);
console.log("alphabetic order", __spreadArray([], locations, true).sort());
console.log("location", locations);
console.log(" reverse alphabetic order", __spreadArray([], locations, true).sort().reverse());
console.log("location", locations);
locations.reverse();
console.log("reversed order", locations);
locations.reverse();
console.log("location", locations);
console.log(" sorted alphabetic order", __spreadArray([], locations, true).sort());
console.log(" stored  reverse alphabetic order", __spreadArray([], locations, true).sort().reverse());
