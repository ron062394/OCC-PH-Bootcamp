//Variables

const my_name = "Princess";
let my_age = 18;

console.log(my_name);
console.log(my_age);

//== Data Types

//Primitive Data Types - mosst basic data type in JS

//Number
let my_num = 20;
let my_num2 = 90.8;
console.log("This is a number: " , my_num, my_num2);

//Sring
let first_name = "Joseph";
console.log("This is a string: " , first_name);

//Boolean -- true or false
let isStudent = false;
console.log("This is a Boolean: ", isStudent);

//Undefined -- uninitialized or missing value
let undefinedVar ;
console.log(undefinedVar);

//Null -- empty; intentional absence
const myNull = null;
console.log(myNull);

//Reference Data Types -- holds more complex data types

//Object -- represents a collection of key:value pairs that are enclosed in { }
let person = {
    name: "Ed",
    age: 20,
    city: "New York"
}

console.log(person);
console.log(person.age);

//Array -- represents an ordered list of values enclosed  [ ]
let numbers = [1, 2, 3, 4, 5];
console.log(numbers, numbers[0], numbers[4]);

//Function -- represents reusable block of codes that can be called by name
function greet(name) {
    console.log('Hi ' + name + '! I am a function!');
    console.log(`Hi ${name}! I am a function!`); //template literals
}

greet('Jose');

//Date
const today = new Date();
console.log(today);
