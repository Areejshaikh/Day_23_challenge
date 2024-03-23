console.log("Day 23 Challenge:");

// Question 67
// add number and string
function addnum(number1: number, numberString: string): number {
  return number1 + Number(numberString);
}

// Trying it with 10 and "15"
console.log(addnum(10, "15"));

// Question 68:
// multiplies two decimal numbers
function multiDecimals(num1: number, num2: number): number {
  return Math.round(num1 * num2 * 100) / 100;
}

console.log(multiDecimals(0.6, 0.2));

// Question 69: Dividing and Finding the Remainder:
//  a function that divides two numbers and returns both the quotient and the
//   remainder. Use an object to return both values.

function twoNumbers(
  num1: number,
  num2: number
): {quotient: number ;  remainder: number } {
  let quotient = Math.floor(num1 / num2);
  let remainder= num1 % num2;

  return { quotient, remainder}
}

console.log(twoNumbers(5, 10));
