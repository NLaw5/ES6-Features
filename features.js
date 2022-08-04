/*
Top 10 Features of Es6 Practice 

Features dedicated from:
https://www.boardinfinity.com/blog/top-10-features-of-es6/#1-let-and-const-keywords-
*/
import {num , getName} from './module.js';

//1. let vs const
console.log("1. Let vs. Const:");
let i = 10
console.log(`Let example of 'i': ${i}`);

const Pi = 3.14
// Pi = 3.145; //note: this will result in compilation error
console.log(`Const example of 'Pi': ${Pi}`);

let s = () => {
    let z = 10;
}
// console.log(z); //note: this will result in compilation error as z is local in block s, z will not be defined

//2. Arrow Functions:
console.log("\n2. Arrow Functions: ");
console.log("Example of a normal function: ");
function myFunction() {
    let a = 5, b = 4
    return a+b
}
console.log(myFunction());

console.log("Example of an arrow function (same f(x) logic): ");
const myFunction2 = () => {
    let a =5, b=4;
    return a+b;
}
console.log(myFunction2());

console.log("If arrow function has only one statement, we can simply omit the parenthesis: ");
const myFunction3 = () => 'This is myFunction3 with no curly brackets'
console.log(myFunction3());

//3. Multi-line Strings
console.log("\n3. Multi-Line Strings")
let test = `a this is the first line
    b this is the second line
        c this is the third line
            d this is the fourth line  
                e this is the fifth line
`

console.log(test);

//4. Default Params
console.log("\n4. Default Parameters")
let calculateArea = (a = 5, b = 6) => {
    console.log(`${a} and ${b}`);
    return a*b;
}

console.log(calculateArea());
console.log(calculateArea(3, 5));

//5. Template Literals
console.log("\n5. Template Literals")
let firstName = "Newman"
console.log(`Hi! My name is ${firstName}`)

//6. Destructuring Assignment
console.log("\n6. Destructuring Assignment: ")
//Array
console.log("\nDestructuring Array of fruits = [Apple, Banana]")
let fruits = ["Apple", "Banana"];
let [a, b] = fruits;
console.log(a, b);

//Object 
console.log("\nDestructuring Object person = {name: Peter, age: 25}")
let person = {name: "Peter", age: "25"};
let {name, age} = person;
console.log(name, age);

//7. Enhanced Object Literals
console.log("\n7. Enhanced Object Literals: ")
let name2 = "Duke";
let age2= "26";
let color = "Brown";
let dog = {name2, age2, color};
console.log("This is the first object literal ");
console.log(dog)

// function declaration
let bark = () => console.log("Woof Woof!!")

let dog2 = {name2, age2, color, bark};
console.log("This is the second object literal ")
dog2.bark();
console.log(dog2)


// function declaration 
// using "this" keyword to access the object keys.
var barkWithName = function(){
    console.log('Woof Woof!!, I am '
    +this.name2+' and I am a '
    +this.age2+' years old, '
    +this.color+ ' coloured dog, Woof Woof!!');
}
let dog3 = {name2, age2, color, bark, barkWithName}
dog3.barkWithName();

//8. Classes
console.log("\n8. Classes")

class UserProfile {   
    constructor(firstName, lastName) { 
       this.firstName = firstName;
       this.lastName = lastName;     
    }  
     
    getName() {       
      console.log(`The Full-Name is ${this.firstName} ${this.lastName}`);    
    } 
 }
 let obj = new UserProfile('John', 'Smith');
 obj.getName(); // output: The Full-Name is John Smith

//9. Modules
console.log("\n9. Modules")
console.log("Grabbing let num and function getName from module.js")
console.log(num);
console.log(getName());


//10. Promises
console.log("\n10. Promises:")
let test3 = (num) => { 
    return new Promise((resolve, reject) => {
        if(num >= 1)
        {
            resolve(`The number entered, ${num}, is greater than or equal to 1!`);
        }
        else
        {
            resolve(`The number entered, ${num}, is less than 1!`);
        }
    })
}

test3(1).then((msg) => {
    console.log(msg);
}).catch((err) =>{
    console.log(err);
})

test3(-1).then((msg) => {
    console.log(msg);
}).catch((err) =>{
    console.log(err);
})