/*
扩展运算符

当我们对数组进行解构时，我们使用扩展运算符（...）将其余元素作为数组。除此之外，我们使用扩展运算符将arr元素扩展到另一个数组。
*/

//Spread operator to get the rest of array elements
{
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let [num1, num2, num3, ...rest] = nums;
  console.log(num1, num2, num3);
  console.log(rest);
}

//Spread operator to copy array
{
  const evens = [0, 2, 4, 6, 8, 10];
  const evenNumbers = [...evens];

  const odds = [1, 3, 5, 7, 9];
  const oddNumbers = [...odds];

  const wholeNumbers = [...evens, ...odds];

  console.log(evenNumbers);
  console.log(oddNumbers);
  console.log(wholeNumbers);
}

//Spread operator to copy object
{
  const user = {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki"
  };

  const copiedUser = { ...user };
  console.log(copiedUser);
}

//Modifying or changing the object while copying
{
  const user = {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki"
  };

  const copiedUser = { ...user, title: "instructor" };
  console.log(copiedUser);
}

//Spread operator with arrow function
/*
每当我们想编写一个箭头函数时，它需要不限数量的参数时，我们就使用一个扩展运算符。如果我们使用扩展运算符作为参数，则调用函数时传递的参数将更改为数组。
*/
{
  const sumAllNums = (...args) => {
    console.log(args);
  };

  sumAllNums(1, 2, 3, 4, 5);
}
