"use strict";

//Challenge 1 - Type Conversion
console.log("Challenge 1: Type Conversion");
let num1 = "32";
console.log("num1 = " + num1 + " Type: " + typeof num1);
num1 = Number(num1);
console.log("num1 = " + num1 + " Type: " + typeof num1);
num1 = num1 + 10;
console.log("num1 = " + num1 + " Type: " + typeof num1);
//What I understood:
//I understand that the Number() function is used to convert a string to a number.

// Challenge 2: Type Coercion
console.log("Challenge 2: Type Coercion");
let num2 = 65;
let num3 = "46";
console.log("num2 = " + num2 + " Type: " + typeof num2);
console.log("num3 = " + num3 + " Type: " + typeof num3);
console.log("num2 + num3 = " + (num2 + num3) + " Type: " + typeof (num2 + num3));
console.log("num2 - num3 = " + (num2 - num3) + " Type: " + typeof (num2 - num3));
console.log("num2 * num3 = " + (num2 * num3) + " Type: " + typeof (num2 * num3));
//I understand that type coercion is the automatic or implicit conversion of values from one data type to another.
//What I understood:
// Type coercion occurs when JavaScript automatically converts a value from one data type to another during an operation.

// Challenge 3: True and False Values
console.log("Challenge 3: True and False Values");
let string1 = "Hello";
let string2 = "";
let num4 = 0;
let num5 = 53;
let nilValue = null;
let undefValue = undefined;
console.log("string1 = " + string1 + " Boolean: " + Boolean(string1));
console.log("string2 = " + string2 + " Boolean: " + Boolean(string2));
console.log("num4 = " + num4 + " Boolean: " + Boolean(num4));
console.log("num5 = " + num5 + " Boolean: " + Boolean(num5));
console.log("nilValue = " + nilValue + " Boolean: " + Boolean(nilValue));
console.log("undefValue = " + undefValue + " Boolean: " + Boolean(undefValue));
//What I understood:
// In JavaScript, the following values are considered false: false, 0, "", null, undefined, and NaN while non-empty strings, non-zero numbers are considered true.

// Challenge 4: if/else
console.log("Challenge 4: if/else");
let age = 23;
console.log("age = " + age);
if (age >= 18) {
    console.log("You are eligible.");
} else {
    console.log("You are not eligible.");
}
let age2 = 16;
console.log("age = " + age2);
if (age2 >= 18) {
    console.log("You are eligible.");
} else {
    console.log("You are not eligible.");
}
// What I understood:
// The if/else statement is used to execute a block of code if a specified condition is true, and another block of code if the condition is false.

// Challenge 5: else if
console.log("Challenge 5: else if");
let score1 = 85;
let score2 = 75;
let score3 = 65;
console.log("score1 = " + score1);
if (score1 >= 90) {
    console.log("You got an A.");
} else if (score1 >= 80) {
    console.log("You got a B.");
} else if (score1 >= 70) {
    console.log("You got a C.");
} else if (score1 >= 60) {
    console.log("You got a D.");
} else {
    console.log("You got an F.");
}
console.log("score2 = " + score2);
if (score2 >= 90) {
    console.log("You got an A.");
} else if (score2 >= 80) {
    console.log("You got a B.");
} else if (score2 >= 70) {
    console.log("You got a C.");
} else if (score2 >= 60) {
    console.log("You got a D.");
} else {
    console.log("You got an F.");
}
console.log("score3 = " + score3);
if (score3 >= 90) {
    console.log("You got an A."); 
} else if (score3 >= 80) {
    console.log("You got a B.");
} else if (score3 >= 70) {
    console.log("You got a C.");
} else if (score3 >= 60) {
    console.log("You got a D.");
} else {
    console.log("You got an F.");
}
// What I understood:
// The else if statement is used to specify a new condition to test, if the first condition is false.

// Challenge 6: switch
console.log("Challenge 6: switch");
let service = "parking";
switch (service) {
    case "library":
        console.log("You have selected the library service.");
        break;
    case "tutoring":
        console.log("You have selected the tutoring service.");
        break;
    case "parking":
        console.log("You have selected the parking service.");
        break;
    case "technology":
        console.log("You have selected the technology service.");
        break;
}
// What I understood:
// The switch statement is used to perform different actions based on different conditions.

// Challenge 7: Ternary Operator
console.log("Challenge 7: Ternary Operator");
let isLoggedIn = true;
let message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message);
isLoggedIn = false;
message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message);
// What I understood:
// The ternary operator is a shorthand way of writing an if/else statement, and it takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false.

// Challenge 8: Student Status Program
console.log("Challenge 8: Student Status Program");
const student = {
    name: "Caven Krom",
    age: 20,
    score: 100,
    major: "Computer Science",
    enrollmentStatus: true,
    studentInfo: function() {
        return `Student Name: ${this.name}, Age: ${this.age}, Score: ${this.score}, Major: ${this.major}, Enrollment Status: ${this.enrollmentStatus}`;
    }
};

console.log(student.studentInfo());

if (student.age >= 18) {
    console.log("The student is 18 or older.");
} else {
    console.log("The student is younger than 18.");
}

if (student.score >= 90) {
    console.log("You got an A."); 
} else if (student.score >= 80) {
    console.log("You got a B.");
} else if (student.score >= 70) {
    console.log("You got a C.");
} else if (student.score >= 60) {
    console.log("You got a D.");
} else {
    console.log("You got an F.");
}

let message2 = student.enrollmentStatus ? "The student is enrolled." : "The student is not enrolled.";
console.log(message2);
// What I understood:
// This program defines a student object with properties and methods, and uses conditional statements to evaluate the student's age, score, and enrollment status.