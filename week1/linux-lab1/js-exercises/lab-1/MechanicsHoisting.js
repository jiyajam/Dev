console.log(message);
var message = 'Hi there!';
//when console.log runs,the variable message exits due to 
// hoisting, but its value is undefined at that point in time.


console.log(message);
let message = 'Hi there!';
//when console.log runs,the variable message is not accessible
// because let and const does not get hoisted in the same way as var.





console.log(showMessage());
const showMessage = function(){
  return 'Hi there!';
};
// this will throw an error because function expressions are not hoisted.
// Function expressions assigned to var → variable hoisted, value undefined → calling before assignment gives TypeError.
//Function expressions assigned to let or const → variable hoisted but uninitialized → calling before assignment gives ReferenceError.
// it puts an error , "ReferenceError: Cannot access 'showMessage' before initialization"



console.log(showMessage());
function showMessage(){
  return 'Hi there!';
}
// this will work because function declarations are hoisted completely.



// 1.
let values = [10, 20, 30];
for(let i = 0; i < values.length; i++){
  console.log(values[i]);
}


// 2.
let lastLogin = '2024-01-15';
console.log(welcome('Charlie', 'Munger'));

function welcome(first, last) {
  return `Welcome, ${first} ${last}! You last logged in on ${lastLogin}.`
};

