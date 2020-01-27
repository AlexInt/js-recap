/*
Assignment operators
赋值运算符
*/
{
  let firstName = "Asabeneh";
  let country = "Finland";
}

/*
Arithmetic Operators
算术运算符
加(+): a + b
减(-): a - b
乘(*): a * b
除(/): a / b
模(%):a % b
指数(**):a ** b
*/
{
  let numOne = 4;
  let numTwo = 3;
  let sum = numOne + numTwo;
  let diff = numOne - numTwo;
  let mult = numOne * numTwo;
  let div = numOne / numTwo;
  let remainder = numOne % numTwo;
  let powerOf = numOne ** numTwo;

  console.log(sum, diff, mult, div, remainder, powerOf);
  // 7,1,12,1.33,1, 64
}
/*
Comparison Operators
比较运算符
*/
{
  console.log(3 > 2); // true, because 3 is greater than 2
  console.log(3 >= 2); // true, because 3 is greater than 2
  console.log(3 < 2); // false,  because 3 is greater than 2
  console.log(2 < 3); // true, because 2 is less than 3
  console.log(2 <= 3); // true, because 2 is less than 3
  console.log(3 == 2); // false, because 3 is not equal to 2
  console.log(3 != 2); // true, because 3 is not equal to 2
  console.log(3 == "3"); // true, compare only value
  console.log(3 === "3"); // false, compare both value and data type
  console.log(3 !== "3"); // true, compare both value and data type
  console.log(3 !== "3"); // true, compare both value and data type
  console.log(3 != 3); // false, compare only value
  console.log(3 !== 3); // false, compare both value and data type
  console.log(0 == false); // true, equivalent
  console.log(0 == ""); // true, equivalent
  console.log(0 == " "); // true, equivalent
  console.log(0 === ""); // false, not exactly the same
  console.log(0 === false); // false, not exactly the same
  console.log(1 == true); // true, equivalent
  console.log(1 === true); // false, not exactly the same
  console.log(undefined == null); // true
  console.log(undefined === null); // false
  console.log(NaN == NaN); // false, not equal
  console.log(NaN === NaN); // false
  console.log(typeof NaN); // number

  console.log("mango".length == "avocado".length); // false
  console.log("mango".length != "avocado".length); // true
  console.log("mango".length < "avocado".length); // true
  console.log("milk".length != "meat".length); // false
  console.log("milk".length == "meat".length); // true
  console.log("tomato".length == "potato".length); // true
  console.log("python".length > "dragon".length); // false
}
/*
Logical Operators
逻辑运算符
*/
{
  //&& ampersand operator example

  const check = 4 > 3 && 10 > 5; // true and true -> true
  const check = 4 > 3 && 10 < 5; // true and false -> false
  const check = 4 < 3 && 10 < 5; // false and false -> false

  //|| pipe or operator, example

  const check = 4 > 3 || 10 > 5; // true and true -> true
  const check = 4 > 3 || 10 < 5; // true and false -> true
  const check = 4 < 3 || 10 < 5; // false and false -> false

  // ! Negation examples

  let check = 4 > 3; // true
  let check = !(4 > 3); //  false
  let isLightOn = true;
  let isLightOff = !isLightOn; // false
  let isMarried = !false; // true
}

/*Increment Operator
递增运算符
*/
//Pre-increment
{
  let count = 0;
  console.log(++count); // 1
  console.log(count); // 1
}
//Post-increment
{
  let count = 0;
  console.log(count++); // 0
  console.log(count); // 1
}
/*
Decrement Operator
递减运算符
*/
//Pre-decrement
{
  let count = 0;
  console.log(--count); // -1
  console.log(count); // -1
}
//Post-decrement
{
  let count = 0;
  console.log(count--); // 0
  console.log(count); // -1
}

/*
Ternary Operators
三元运算符
*/
{
    let number = 5;
    number > 0
      ? console.log(`${number} is a positive number`)
      : console.log(`${number} is a negative number`);
    number = -5;

    number > 0
      ? console.log(`${number} is a positive number`)
      : console.log(`${number} is a negative number`);
}