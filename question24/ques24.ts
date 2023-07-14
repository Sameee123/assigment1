let fruit = 'apple';

console.log("Is fruit == 'apple'? I predict true.");
console.log(fruit == 'apple');

console.log("Is fruit != 'banana'? I predict true.");
console.log(fruit != 'banana');

console.log("Is fruit == 'orange'? I predict false.");
console.log(fruit == 'orange');

console.log("Is fruit != 'apple'? I predict false.");
console.log(fruit != 'apple');

// Tests using the lower case function
let name = 'John Doe';

console.log("Is name.toLowerCase() == 'john doe'? I predict true.");
console.log(name.toLowerCase() == 'john doe');

console.log("Is name.toLowerCase() != 'jane smith'? I predict true.");
console.log(name.toLowerCase() != 'jane smith');

console.log("Is name.toLowerCase() == 'John Doe'? I predict false.");
console.log(name.toLowerCase() == 'John Doe');

console.log("Is name.toLowerCase() != 'john doe'? I predict false.");
console.log(name.toLowerCase() != 'john doe');

// Numerical tests
let num1 = 10;
let num2 = 5;

console.log("Is num1 > num2? I predict true.");
console.log(num1 > num2);

console.log("Is num1 < num2? I predict false.");
console.log(num1 < num2);

console.log("Is num1 >= num2? I predict true.");
console.log(num1 >= num2);

console.log("Is num1 <= num2? I predict false.");
console.log(num1 <= num2);

// Tests using "and" and "or" operators
let x = 5;
let y = 10;
let z = 15;

console.log("Is x < y and y < z? I predict true.");
console.log(x < y && y < z);

console.log("Is x < y or y > z? I predict true.");
console.log(x < y || y > z);

// Test whether an item is in an array
let fruits = ['apple', 'banana', 'orange'];

console.log("Is 'apple' in the fruits array? I predict true.");
console.log(fruits.includes('apple'));

console.log("Is 'grape' in the fruits array? I predict false.");
console.log(fruits.includes('grape'));

// Test whether an item is not in an array
console.log("Is 'kiwi' not in the fruits array? I predict true.");
console.log(!fruits.includes('kiwi'));

console.log("Is 'banana' not in the fruits array? I predict false.");
console.log(!fruits.includes('banana'));