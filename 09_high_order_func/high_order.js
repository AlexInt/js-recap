/*
callback
回调函数是一个可以作为参数传递给其他函数的函数。参见下面的示例。
*/
{
  // a callback function, the function could be any name
  const callback = n => {
    return n ** 2;
  };

  function call(callback, n) {
    return callback(n) * n;
  }
  const c = call(callback, 3);
  console.log(c);
}

{
  function sayHello() {
    console.log("Hello");
  }
  //   setInterval(sayHello, 2000); // it prints hello in every 2 seconds

  function sayHello() {
    console.log("Hello");
  }
  //   setTimeout(sayHello, 2000); // it prints hello after it waits for 2 seconds.
}

/*
Functional Programming
函数式编程
*/
//forEach
{
  let sum = 0;
  const numbers = [1, 2, 3, 4, 5];
  numbers.forEach(num => (sum += num));

  console.log(sum);
}

//map: Iterate an array elements and modify the array elements.
{
    const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
    const namesToUpperCase = names.map(name => name.toUpperCase());
    console.log(namesToUpperCase);
}

//Filter: Filter out items which full fill filtering conditions and return a new array.
{
    const countries = [
      "Albania",
      "Bolivia",
      "Canada",
      "Denmark",
      "Ethiopia",
      "Finland",
      "Germany",
      "Hungary",
      "Ireland",
      "Japan",
      "Kenya"
    ];
    const countriesEndsByia = countries.filter(country =>
      country.includes("ia")
    );
    console.log(countriesEndsByia);
}

/*
reduce: Reduce takes a callback function. The call back function takes accumulator and current value as a parameter and returns a single value:
*/
{
    const numbers = [1, 2, 3, 4, 5];
    const sum = numbers.reduce((accum, curr) => accum + curr);

    console.log(sum);
}

/*
every: Check if all the elements are similar in one aspect. It returns boolean
*/
{
    const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
    const areAllStr = names.every(name => typeof name === "string");

    console.log(areAllStr);
}

/*
find: Return the first element which satisfies the condition
*/
{
  const ages = [24, 22, 25, 32, 35, 18];
  const age = ages.find(age => age < 20);

  console.log(age);
}

/*
findIndex：返回满足条件的第一个元素的位置
*/
{
  const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
  const ages = [24, 22, 25, 32, 35, 18];

  const result = names.findIndex(name => name.length > 7);
  console.log(result); // 0

  const age = ages.findIndex(age => age < 20);
  console.log(age); // 5
}

/*
some: Check if some of the elements are similar in one aspect. It returns boolean
*/

{
  const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
  const bools = [true, true, true, true];

  const areSomeTrue = bools.some(b => {
    return b === true;
  });

  console.log(areSomeTrue); //true

  const areAllStr = names.some(name => typeof name === "number");
  console.log(areAllStr); // false
}

/*
sort：sort方法将数组元素按升序或降序排列。默认情况下，sort（）方法将值作为字符串排序。这对于字符串数组项很好，但不适用于数字。如果数字值按字符串排序，则会给我们错误的结果。排序方法修改原始数组。建议您在开始使用排序方法之前先复制原始数据。
*/ 
//Sorting string values
{
  const products = ["Milk", "Coffee", "Sugar", "Honey", "Apple", "Carrot"];
  console.log(products.sort()); // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
  //Now the original products array  is also sorted
}

//Sorting Numeric values
/*
如您在下面的示例中看到的，升序排序后，第100位排在第一位。 Sort将项目转换为string，因为比较了'100'和其他数字，即字符串'100'的开头变为最小的数字1。为避免这种情况，我们在sort方法中使用了一个比较回调函数，该函数返回一个负数，零或正数。
*/ 
{
  const numbers = [9.81, 3.14, 100, 37];
  // Using sort method to sort number items provide a wrong result. see below
  console.log(numbers.sort()); //[100, 3.14, 37, 9.81]
  numbers.sort(function(a, b) {
    return a - b;
  });

  console.log(numbers); // [3.14, 9.81, 37, 100]

  numbers.sort(function(a, b) {
    return b - a;
  });
  console.log(numbers); //[100, 37, 9.81, 3.14]
}

/*
Sorting Object Arrays
每当我们对数组中的对象进行排序时。我们使用对象键进行比较。
*/
{
  const users = [
    { name: "Asabeneh", age: 150 },
    { name: "Brook", age: 50 },
    { name: "Eyo", age: 100 },
    { name: "Elias", age: 22 }
  ];
  users.sort((a, b) => {
    if (a.age < b.age) return -1;
    if (a.age > b.age) return 1;
    return 0;
  });
  console.log(users); // sorted ascending
}