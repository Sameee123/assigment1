let locations : string []= ["japan ", "pakistan", " india"];
console.log("location",  locations);

console.log("alphabetic order", [...locations].sort());
console.log("location",  locations);
console.log(" reverse alphabetic order", [...locations].sort().reverse());
console.log("location",  locations);

locations.reverse();
console.log("reversed order", locations);
locations.reverse();
console.log("location",  locations);

console.log(" sorted alphabetic order", [...locations].sort());
console.log(" stored  reverse alphabetic order", [...locations].sort().reverse());











