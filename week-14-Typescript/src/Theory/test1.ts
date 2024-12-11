
//noImiplicitAny is true by default in tsconfig, 
// means that the "any" type needs to be explicitely defined everytime it is needed
//changed it to false --> now it doesn't give any error

const greet = (name)=>{                 
    console.log("good morning", name);
}
greet("nihal")

console.log("hello");

let var1 = 5;
let var2 = 10;
console.log(var1/var2);

