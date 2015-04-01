function fizzBuzz(num) {
  if(num % 15 == 0) {
    return "FizzBuzz";
  } else if (num % 5 ==0) {
  	return "Buzz";
  } else if (num % 3 ==0) {
    return "Fizz";
  } else {
    return "Not fizz or buzz";
  }
}

function fibonacci(cheese) {
  var fib_current = 1;
  var fib_previous = 1;
  var fib_temp;

  if (cheese < 3) {
    console.log("Please enter a number higher than 2");
    return;
  } 
  else if (typeof(cheese) == "number") 
  {
    console.log(fib_current);
    console.log(fib_previous);

    for (var i=2; i<cheese; i++) {
      fib_temp = fib_current;
      fib_current = fib_current + fib_previous;
      fib_previous = fib_temp;
      console.log(fib_current);
    } 
  } 
  else 
  {
      console.log("Please enter a number");
  }
  console.log("loop finished");
}