ECMAScript 6 (ES6) - ECMAScript 2015
What is ES6?
ECMAScript 6 (ES6), also known as ECMAScript 2015, is the sixth edition of the ECMAScript language specification standard. ES6 introduced several new features and syntax improvements to make JavaScript more powerful and easier to work with.

New Features Introduced in ES6
Block-Scoped Variables
ES6 introduced two new ways to declare variables: let and const, which are block-scoped.

let: Used to declare variables that can be reassigned.
const: Used to declare constants, which cannot be reassigned after their initial value is set.
javascript
Copy code
let a = 10;
const b = 20;

if (true) {
let a = 30;
const b = 40;
console.log(a); // 30
console.log(b); // 40
}

console.log(a); // 10
console.log(b); // 20
Arrow Functions
Arrow functions provide a shorter syntax for writing functions and lexically bind the this value.

javascript
Copy code
const add = (x, y) => x + y;
console.log(add(2, 3)); // 5
Default Parameters
Default parameters allow function parameters to have default values if no value or undefined is passed.

javascript
Copy code
function greet(name = 'Guest') {
console.log(`Hello, ${name}`);
}

greet(); // "Hello, Guest"
greet('Alice'); // "Hello, Alice"
Rest Parameters
The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.

javascript
Copy code
function sum(...numbers) {
return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // 6
Spread Operator
The spread operator expands an array or object into individual elements.

javascript
Copy code
let arr = [1, 2, 3];
let newArr = [...arr, 4, 5];
console.log(newArr); // [1, 2, 3, 4, 5]

let obj = {a: 1, b: 2};
let newObj = {...obj, c: 3};
console.log(newObj); // {a: 1, b: 2, c: 3}
String Templating
Template literals allow embedded expressions and multi-line strings.

javascript
Copy code
let name = 'John';
let greeting = `Hello, ${name}!`;
console.log(greeting); // "Hello, John!"

let multiLine = `This is a
multi-line string.`;
console.log(multiLine);
Object and Property Shorthand
ES6 allows you to create objects using a shorthand for properties.

javascript
Copy code
let name = 'Alice';
let age = 25;

let person = { name, age };
console.log(person); // { name: 'Alice', age: 25 }
Iterators and for-of Loops
Iterators are objects that define a sequence and potentially a return value upon its termination. for-of loops provide a simpler way to iterate over iterable objects (like arrays, strings, etc.).

javascript
Copy code
let arr = [10, 20, 30];

for (let value of arr) {
console.log(value); // 10, 20, 30
}

What ES6 is: Understand that ES6 is the sixth edition of the ECMAScript language specification, also known as ECMAScript 2015.
New Features Introduced in ES6: Be familiar with new syntax and features like let, const, arrow functions, default parameters, rest parameters, spread operator, template literals, and enhanced object properties.
Difference Between a Constant and a Variable: Know that let declares variables that can be reassigned, while const declares constants that cannot be reassigned.
Block-Scoped Variables: Understand that let and const are block-scoped, meaning they are only accessible within the block they are declared.
Arrow Functions and Function Parameters Default to Them: Be able to use arrow functions and default parameters in functions.
Rest and Spread Function Parameters: Know how to use rest parameters to handle multiple arguments and spread operator to expand arrays and objects.
String Templating in ES6: Use template literals for string interpolation and multi-line strings.
Object Creation and Their Properties in ES6: Create objects using property shorthand and understand the new features for object literals.
Iterators and for-of Loops: Use iterators and for-of loops to iterate over iterable objects.
