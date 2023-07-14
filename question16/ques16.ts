let guest :string[]=["sameer", "fahad", "hamza"];

console.log("Good news we found big table");

guest.unshift('yousaf');

guest.splice(Math.floor(guest.length / 2), 0, 'Eve');

guest.push("khan");

console.log(`hello, ${guest[0]} your are invited to my table`);
console.log(`hello, ${guest[1]} your are invited to my table`);
console.log(`hello, ${guest[2]} your are invited to my table`);
console.log(`hello, ${guest[3]} your are invited to my table`);
console.log(`hello, ${guest[4]} your are invited to my table`);
console.log(`hello, ${guest[5]} your are invited to my table`);
