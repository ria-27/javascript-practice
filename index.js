console.log('hello');  // acts as a statement -- log a message on console
// variables
let name='ria';
console.log(name);

// constants
const interestRate=0.1;
console.log(interestRate);

let isApproved=false;
let lastName=null;
let firstName=undefined;

//to check type of a variable
typeof name;
name=1;
typeof name;
typeof isApproved;

//reference type
//objects
   // for multiple related variables- put them in an object
let person={
    Name:'joi',
    age:30
};

//to access variables in object
// 1. dot notation
person.Name='john';
console.log(person.Name); //to print only specific variable in the object

//2. bracket notation
person['Name']='keer';
console.log(person.Name); 

// when you dont know what property to access at the time of writing
let selection='name';
person[selection]='keer';

//arrays
let selectedColours=['red','blue'];  
selectedColours[2]='green';
// DIFFERENT TYPES CAN BE STORED IN AN ARRAY
selectedColours[3]=3;
console.log(selectedColours);

// to access elements- using index
console.log(selectedColours[0]);
console.log(selectedColours.length);

// functions
function greet(name, lastName){
    console.log('hello '+ name + ' '+ lastName);
}

greet('john');  // argument is value supplied for that parameter
greet('mary','sue');

// function to calculate
function square(number){
    return number*number;
}
console.log(square(2)); // two function calls here




