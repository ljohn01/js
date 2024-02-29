let cell1 = "ID";
let cell2 = "Name";
let cell3 = "Occupation";
let cell4 = "Age";

let cell5 = "42";
let cell6 = "Bruce";
let cell7 = "Knight";
let cell8 = "41";

let cell9 = "57";
let cell10 = "Bob";
let cell11 = "Fry Cook";
let cell12 = "19";

let cell13 = "63";
let cell14 = "Blaine";
let cell15 = "Quiz Master";
let cell16 = "58";

let cell17 = "98";
let cell18 = "Bill";
let cell19 = "Doctor's Assistant";
let cell20 = "26";

// const row1 = [cell1, cell2, cell3, cell4];
// const row2 = [cell5, cell6, cell7, cell8];
// const row3 = [cell9, cell10, cell11, cell12];
// const row4 = [cell13, cell14, cell15, cell16];
// const row5 = [cell17, cell18, cell19, cell20];

// console.log(row1, row2, row3, row4, row5);

//making an object
const bruce = {
    id: 42,
    name: "Bruce",
    occupation: "Knight",
    age: "41"
}

const bob = {
    id: 57,
    name: "Bob",
    occupation: "Fry Cook",
    age: "19"
}

const blaine= {
    id: 63,
    name: "Blaine",
    occupation: "Quiz Master",
    age: "58"
}

const bill = {
    id: 98,
    name: "Bill",
    occupation: "Doctor's Assistant",
    age: "26"
}

const barry = {
    id: 48,
    name: "Barry",
    occupation: "Runner",
    age: "25"
}

const bilbo = {
    id: 7,
    name: "Bilbo",
    occupation: "None",
    age: "111"
}

// console.log(bruce);
// console.log(bob);
// console.log(blaine);
// console.log(bill);

const people = [bruce, bob, blaine, bill];
people.pop();
people.splice(1, 0, barry);
people.splice(4, 0, bilbo);
console.log(people);

const totalAge = [(41 + 25 + 19 + 58 + 111)/5];
console.log("The average age of this group of people is: ", totalAge ,"years old.");
