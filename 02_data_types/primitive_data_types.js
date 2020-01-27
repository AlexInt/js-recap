/*
原始数据类型
Primitive data types in JavaScript includes:

  1. Numbers - Integers, floats
  2. Strings - Any data under single or double quote
  3. Booleans - true or false value
  4. Null - empty value or no value
  5. Undefined - a declared variable without a value
*/

let word = "JavaScript";
// we dont' modify string
// we don't do like this, word[0] = 'Y'
let numOne = 3;
let numTwo = 3;
console.log(numOne == numTwo); // true

let js = "JavaScript";
let py = "Python";
console.log(js == py); //false

let lightOn = true;
let lightOff = false;
console.log(lightOn == lightOff); // false
