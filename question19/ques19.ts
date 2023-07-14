let guest :string[]=["yousaf ", "sameer", "fahad", "Eve", "hamza","david"];
console.log("just two places are left for dinner table");
if (guest.length>1)
{
    const removedgues= guest.pop();
    console.log(`removed ${removedgues} but we cant invite u `);
}
console.log("hello, ".concat(guest[0], " your are invited to my table"));
console.log("hello, ".concat(guest[1], " your are invited to my table"));
console.log("hello, ".concat(guest[2], " your are invited to my table"));
console.log("hello, ".concat(guest[3], " your are invited to my table"));
console.log("hello, ".concat(guest[4], " your are invited to my table"));
console.log("hello, ".concat(guest[5], " your are invited to my table"));

const numinvited=guest.length
{
    console.log(`num of people invited ${numinvited}`);
}