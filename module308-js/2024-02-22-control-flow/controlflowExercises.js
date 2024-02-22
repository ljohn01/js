// let num = -10;
// if (num >= 0) {
//     console.log("The number is positive")
// } else {
//     console.log("The number is negative")
// }


// Granting access to users over the age of 18
// let age = 19;
// if (age >= 18) {
//     console.log("Access granted")
// } else  {
//     console.log("Access denied")
// }

let num = 39;
if (num >= 0) {
    if (num > 100) {
        console.log("This number is positive and greater than 100");
    } else {
        console.log("This number is positive but less than 100");
    }
} else {
    console.log("This number is negative");
}

console.log('--------------------------------------------');

let grade = 89;
if (grade >= 90) {
    console.log("A");
} else if (grade >= 80) {
    console.log("B");
} else if (grade >= 70) {
    console.log("C");
} else if (grade >= 55) {
    console.log("D");
} else if (grade < 55) {
    console.log("F")
}