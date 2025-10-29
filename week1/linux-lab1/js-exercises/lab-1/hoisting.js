
// function declaration
function square(x) {
  return x * x;
}

// function expression
const square = function(x) {
  return x * x;
};

//the main difference is that function declarations are hoisted, 
// meaning they can be called before they are defined in the code, 
// while function expressions are not hoisted and can only be called after they are defined.



// 1.
function cube(x) {
    return x * x * x;
}

// 2.
const fullname = function (first, last) {
  return first + " " + last;
}

// 3.
const power = function(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
}

// 4.
const sumCubes = function(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + cube(numbers[i]);
  }
  return total;
}

