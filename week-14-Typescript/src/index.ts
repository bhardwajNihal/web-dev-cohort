import { NumberLiteralType } from "typescript";

let x: number = 5;

// x = "hello"          // will give compilation error

console.log(x);

function greet(name:string):string{
    return "hello " + name
}      

function sum(x:number, y:number):number{        //specifying the return type
    return x + y
}

function isEligibleToVote(age:number):boolean{
    return (age>=18) ? true  : false
}

function callback(){
    console.log("callback function ran!");
    
}

function delay(cb: ()=>void){             // syntax to pass functional arguments
setTimeout(cb, 3000);
}

delay(callback)

// will compile down to that js syntax which is compatible to the standard set in the tsconfig file
const arrowfn = ()=> console.log("hello!");

arrowfn()

// function with object as an argument

// instead of defining the type of an object each time is used in a new function,
// ts provides a way to define a separete type of object explicitely for its reusability - using types and interfaces

interface userType{             
    firstname: String,
    lastname: string,
    age:Number
}

function greeting(user:userType){
    console.log("hello ",user.firstname, user.age);
}