/*
什么是函数？
函数是为执行特定任务而设计的可重用代码块或编程语句。
*/
//函数声明
{
  //declaring a function without a parameter
  function functionName() {
    // code goes here
  }
  functionName(); // calling function by its name and with parentheses
}

//无参数，无返回值函数
{
  // function without parameter,  a function which square a number
  function square() {
    let num = 2;
    let sq = num * num;
    console.log(sq);
  }
  square(); // 4
}
//无参数，有返回值函数
{
  function addTwoNumbers() {
    let numOne = 2;
    let numTwo = 3;
    let total = numOne + numTwo;
    return total;
  }

  console.log(addTwoNumbers());
}

//有一个参数，有返回值函数
{
  function areaOfCircle(r) {
    let area = Math.PI * r * r;
    return area;
  }

  console.log(areaOfCircle(10)); // should be called with one argument
}

//有两个参数，有返回值函数
{
  function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo;
    console.log(sum);
  }
  sumTwoNumbers(10, 20); // calling functions
}


//多个参数函数
{
  // this function takes array as a parameter and sum up the numbers in the array
  function sumArrayValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + numbers[i];
    }
    return sum;
  }
  const numbers = [1, 2, 3, 4, 5];
  //calling a function
  console.log(sumArrayValues(numbers));
}

//不确定数量参数的函数
{
function sumAllNums() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173
}

//不确定数量参数的箭头函数
{
  const sumAllNums = (...args) => {
    let sum = 0;
    for (const element of args) {
      sum += element;
    }
    return sum;
  };

  console.log(sumAllNums(1, 2, 3, 4)); // 10
  console.log(sumAllNums(10, 20, 13, 40, 10)); // 93
  console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40)); // 173
}

//匿名函数
{
    const anonymousFun = function() {
      console.log(
        "I am an anonymous function and my value is stored in anonymousFun"
      );
    };
}

//Expression Function
//表达式函数即匿名函数
{
  //Declaration function
  function square(n) {
    return n * n;
  }

  console.log(square(2)); // -> 4

  // Function expression
  const square_A = function(n) {
    return n * n;
  };

  console.log(square_A(2)); // -> 4
}

//自调用函数
/*
自调用函数是匿名函数，不需要通过调用来返回值。
*/
{
    (function(n) {
      console.log(n * n);
    })(2); // 4, but instead of just printing if we want to return and store the data, we do as shown below

    let squaredNum = (function(n) {
      return n * n;
    })(10);

    console.log(squaredNum);
}

//箭头函数
{
  function square(n) {
    return n * n;
  }

  console.log(square(2)); // 4

  const square_a = n => {
    return n * n;
  };

  console.log(square_a(2)); // -> 4
  // if we have only one line, it can be written as follows, explicit return
  const square_b = n => n * n; // -> 4
}

//带有默认参数的函数
{
    function greetings(name = "Peter") {
      let message = `${name}, welcome to 30 Days Of JavaScript!`;
      return message;
    }

    console.log(greetings());
    console.log(greetings("Asabeneh"));

    const generateFullName = (firstName = "Asabeneh", lastName = "Yetayeh") => {
      let space = " ";
      let fullName = firstName + space + lastName;
      return fullName;
    };

    console.log(generateFullName());
    console.log(generateFullName("David", "Smith"));
}