// I am making comments for my notes

// Reserved words : we can't use them because  the interpreter uses them 

// Start with this to make sure my file runs
// node notes.js
// console.log('this ran');

let num  = 5;
// let trueVar = 'yes';
// this won't run because true is a reserved words
// let true  = 'yes';
let num2 = 8.9;
// console.log(num2);

/*
/   console.log()
*/
// console.log(this won't work) <-- because there is no variable, correct syntax or numerical value 
// console.log('strings need to be in quotes');
// console.log('these are backticks');
// console.log("double quotes also work");

/*
* Data Types
*/
// Number - integers and float
// String 
// Boolean - true/false
// Null - does not belong to any type described above
//      its purpose is to indicate that there is no value
//      null is an empty or non-existent value and must be assigned
// Undefined - indicates that a variable had not been assigned avalue or null
//      variable are often declared without a value
//      the value could be something that has yet to be calculated or something that will be provided later, like user input
// Objects

// var stringOne = 'this is a string example';
// let stringTwo = 'this is another string example';
// const stringThree = 'this ia constant string example';
// console.log(stringOne);
// console.log(stringTwo);
// console.log(stringThree);
// notice that there are no space in variable names
// use camelCase
// or snake_case
// or kebab-case

/*
* typeof
*/
// using the variable that we already declared and initialized
// check the type of value that was assigned to each variable
// we need to console.log() so we can see what typeof returns
console.log('===============================');
// console.log(typeof(42));
// console.log(typeof(num));
// console.log('num is: ' + num);
// console.log(typeof(num2));
// console.log('num is: ' + num2);

/*
* Arithmetic Operators
*/
// + addition of two values
// - difference between two values
// * product of two values
// / returns the division of two values
// % returns the remainder of two values 

// console.log(3+4);
// console.log(3-2);
// console.log(6*4);
// console.log(16/8);
// console.log(14%3); // 3 goes into 13 4 times 3*4=12, 14-12=2

// let arithmetic1 = 10;
// let arithmetic2 = -1;
// let arithmetic3 = 9;
// let arithmetic4 = 0;
// let arithmetic5 = 2;

// using arithmetic operators with variables
// console.log("now we're doing some math problems");
// console.log(arithmetic1 + arithmetic2);
// console.log(arithmetic3 * arithmetic2);
// console.log(arithmetic5 - arithmetic1);
// console.log(arithmetic1 / arithmetic5);
// console.log(arithmetic1 % arithmetic3);

// shorthand notation
// let newNumber = 10;
// newNumber = newNumber +1;
// console.log(newNumber);
// newNumber *= 2;
// console.log(newNumber);
// newNumber /= 11;
// console.log(newNumber);


// true false statements
console.log(5>4);
console.log(4<5);
console.log (6<=4);
console.log(1 + 2 === 3);
console.log("10" + 5);