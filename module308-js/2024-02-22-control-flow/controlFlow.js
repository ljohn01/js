/*
*  Scope defines where variable and functionality can be accessed
*/

/*
*  Code blocks
*/
// These describe chunks of code that are within the same scope
// Usually delimited by a pair  of curly braces {} and combind with other JS functionality like conditionals or functions or loops

// let x = 10;
// let y = 5;
// console.log("x is:", x, "y is: ", y);

// {
//     let z = x + y;
//     console.log("z is: ", z);
// }

/*
*  ===== Scope =====
*/
// Global scope - valid everywhere, you use var instead of let (avoid try avoid using var)
// Module scope 
// Function scope
// Block scope - valid only within the block of code that it was created in {}

// This code is from the notes and was modified from mdn code 
// An example as to why we should AVOID using var over let
// {
//     var ex = 1;
//     {
//         var ex = 2;
//         console.log(ex);
//     }
//     console.log(ex);
// }

// console.log('--------------------------------------------');

// {
//     let ex = 1;
//     {
//        let ex = 2;
//         console.log(ex);
//     }
//     console.log(ex);
// }

// console.log('--------------------------------------------');

/*
* Control flow and conditionals
*/
// if () {}
// if () {} else {}
// what is the difference?
// remember = is assignment and == or === are both checking for equality
// you do NOT need the {} if there is only one line, BUT you DO need them any time there is more than one line
// it can also help with readability as you are learning to use {}
// x = 10;
// console.log('if but not else');
// if (x==10) {
//     console.log('x is 10');
//     // this only prints if x is 10
// }
// console.log('i always print');

// console.log('************************');

// console.log('if with else');
// if (x==10) {
//     console.log('x is 10');
//     // this only prints if x is 10
// } else {
//     console.log('i only print if x is NOT 10');
// }
// console.log('i always print')

// console.log('************************');

// let isRaining = true;
// if (isRaining) {
//     console.log('i am bringing my umbrella')
// }

// let age = 16;
// if (age >= 15) {
//     console.log('you are old enough to have a drivers license' )
// } else {
//     console.log('you are NOT old enough to have a drivers license')
// }

// =====================================================================
let num = -10;
if (num >= 0) {
    console.log("The number is positive")
} else {
    console.log("The number is negative")
}

console.log('--------------------------------------------');
// Granting access to users over the age of 18
let age = 19;
if (age >= 18) {
    console.log("Access granted")
} else  {
    console.log("Access denied")
}