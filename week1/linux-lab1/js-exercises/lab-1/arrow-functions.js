
const sayHelloArrow = () => "Hello, world!";
console.log(sayHelloArrow());

const doubleArrow = (x) => x * 2;
console.log(doubleArrow(5));

const addArrow =(x,y) =>x+y;
console.log(addArrow(3,4));

const personArrow = {
    name: "Alice",
    sayHi: () => "Hi, " + this.name + "!" // 'this' will not work as expected here

};

const numbers = [1, 2, 3, 4, 5];
const doubled = [];

numbers.forEach(num =>  doubled.push(num * 2)); 
console.log(doubled);
