/*create an empty array
创建空数组
*/
{
  // syntax
  const arr = Array();
  // or
  let arr1 = new Array();
  console.log(arr); // []
  console.log(arr1);

  // syntax
  // This the most recommended way to create an empty list
  const arr2 = [];
  console.log(arr2);
}

/*create an array with values
创建非空数组
*/
{
    const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
    const fruits = ["banana", "orange", "mango", "lemon"]; // array of strings, fruits
    const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of strings, vegetables
    const animalProducts = ["milk", "meat", "butter", "yoghurt"]; // array of strings, products
    const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // array of web technologies
    const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // array of strings, countries

    // Print the array and its length

    console.log("Numbers:", numbers);
    console.log("Number of numbers:", numbers.length);

    console.log("Fruits:", fruits);
    console.log("Number of fruits:", fruits.length);

    console.log("Vegetables:", vegetables);
    console.log("Number of vegetables:", vegetables.length);

    console.log("Animal products:", animalProducts);
    console.log("Number of animal products:", animalProducts.length);

    console.log("Web technologies:", webTechs);
    console.log("Number of web technologies:", webTechs.length);

    console.log("Countries:", countries);
    console.log("Number of countries:", countries.length);
}

//Array can have items of different data types
//数组可以拥有多种类型的元素
{
    const arr = [
      "Asabeneh",
      250,
      true,
      { country: "Finland", city: "Helsinki" },
      { skills: ["HTML", "CSS", "JS", "React", "Python"] }
    ]; // arr containing different data types
    console.log(arr);
}
/*Creating an array using split*/
{
  let js = "JavaScript";
  const charsInJavaScript = js.split("");

  console.log(charsInJavaScript); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

  let companiesString =
    "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
  const companies = companiesString.split(",");

  console.log(companies); // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
  let txt =
    "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
  const words = txt.split(" ");

  console.log(words);
  // the text has special characters think how you can just get only the words
  // ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]
}

//Accessing array items using index
//用索引获取数组的元素
{
  const fruits = ["banana", "orange", "mango", "lemon"];
  let firstFruit = fruits[0]; // we are accessing the first item using its index

  console.log(firstFruit); // banana

  secondFruit = fruits[1];
  console.log(secondFruit); // orange

  let lastFruit = fruits[3];
  console.log(lastFruit); // lemon
  // Last index can be calculated as follows

  let lastIndex = fruits.length - 1;
  lastFruit = fruits[lastIndex];

  console.log(lastFruit); // lemon
}

/*Modifying array element
修改数组元素
*/
{
    const numbers = [1, 2, 3, 4, 5];
    numbers[0] = 10; // changing 1 at index 0 to 10
    numbers[1] = 20; // changing  2 at index 1 to 20

    console.log(numbers); // [10, 20, 3, 4, 5]

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

    countries[0] = "Afghanistan"; // Replacing Albania by Afghanistan
    let lastIndex = countries.length - 1;
    countries[lastIndex] = "Korea"; // Replacing Kenya by Korea

    console.log(countries);
}

/*Methods to manipulate array
数组的方法
*/

//1. Array Constructor 数组构造方法
{
  const arr = Array(); // creates an an empty array
  console.log(arr);

  const eightEmptyValues = Array(8); // it creates eight empty values
  console.log(eightEmptyValues); // [empty x 8]
}

//2. Creating static values with fill 填充
{
  const arr = Array(); // creates an an empty array
  console.log(arr);

  const eightXvalues = Array(8).fill("X"); // it creates eight element values filled with 'X'
  console.log(eightXvalues); // ['X', 'X','X','X','X','X','X','X']

  const eight0values = Array(8).fill(0); // it creates eight element values filled with '0'
  console.log(eight0values); // [0, 0, 0, 0, 0, 0, 0, 0]

  const four4values = Array(4).fill(4); // it creates 4 element values filled with '4'
  console.log(four4values); // [4, 4, 4, 4, 4, 4, 4, 4]
}

//3. Concatenating array using concat 数组拼接
{
  const firstList = [1, 2, 3];
  const secondList = [4, 5, 6];
  const thirdList = firstList.concat(secondList);

  console.log(thirdList); // [1, 2, 3, 4, 5, 6]
}

//4. etting array length 数组长度
{
  const numbers = [1, 2, 3, 4, 5];
  console.log(numbers.length); // -> 5 is the size of the array
}

//5. Getting index an element in arr array 
// 获取数组元素的索引
{
  const numbers = [1, 2, 3, 4, 5];

  console.log(numbers.indexOf(5)); // -> 4
  console.log(numbers.indexOf(0)); // -> -1
  console.log(numbers.indexOf(1)); // -> 0
  console.log(numbers.indexOf(6)); // -> -1

  // let us check if a banana exist in the array
  const fruits = ["banana", "orange", "mango", "lemon"];
  let index = fruits.indexOf("banana"); // 0

  //当索引为-1的时候，则数组不包含此元素
  if (index != -1) {
    console.log("This fruit does exist in the array");
  } else {
    console.log("This fruit does not exist in the array");
  }
  // This fruit does exist in the array
}

//Getting last index of an element in array
//6. 获取某元素在数组中的最后一个索引
{
  const numbers = [1, 2, 3, 4, 5, 3, 1, 2];

  console.log(numbers.lastIndexOf(2)); // 7
  console.log(numbers.lastIndexOf(0)); // -1
  console.log(numbers.lastIndexOf(1)); //  6
  console.log(numbers.lastIndexOf(4)); //  3
  console.log(numbers.lastIndexOf(6)); // -1
}

//Checking array
//7.检查数据的类型是不是数组
{
  const numbers = [1, 2, 3, 4, 5];
  console.log(Array.isArray(numbers)); // true

  const number = 100;
  console.log(Array.isArray(number)); // false
}

//Converting array to string
//8.转换数组为字符串类型
{
  const numbers = [1, 2, 3, 4, 5];
  console.log(numbers.toString()); // 1,2,3,4,5

  const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
  console.log(names.toString()); // Asabeneh,Mathias,Elias,Brook
}

//Joining array elements
//9.拼接数组元素
/*
join: It used to join the elements of the array, the argument passed in the join method will be joined in the array and return as a string. By default, it joins with a comma, but we can pass different string parameter which can be joined between the items.
*/
{
  const numbers = [1, 2, 3, 4, 5];
  console.log(numbers.join()); // 1,2,3,4,5

  const names = ["Asabeneh", "Mathias", "Elias", "Brook"];

  console.log(names.join()); // Asabeneh,Mathias,Elias,Brook
  console.log(names.join("")); //AsabenehMathiasEliasBrook
  console.log(names.join(" ")); //Asabeneh Mathias Elias Brook
  console.log(names.join(", ")); //Asabeneh, Mathias, Elias, Brook
  console.log(names.join(" # ")); //Asabeneh # Mathias # Elias # Brook
}

//Slice array elements
//10. 对数组元素进行切片
/*
Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. 
*/
{
  const numbers = [1, 2, 3, 4, 5];

  console.log(numbers.slice()); // -> it copies all  item
  console.log(numbers.slice(0)); // -> it copies all  item
  console.log(numbers.slice(0, numbers.length)); // it copies all  item
  console.log(numbers.slice(1, 4)); // -> [2,3,4] // it doesn't include the ending position
}

//Splice method in array
//11. 数组的替换
/*
拼接Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.
return 被替换的数字
*/
{
  const numbers = [1, 2, 3, 4, 5];
  console.log(numbers.splice()); // -> remove all items

  const numbers1 = [1, 2, 3, 4, 5];
  console.log(numbers1.splice(0, 1)); // remove the first item

  const numbers2 = [1, 2, 8, 9, 5];
  console.log(numbers2.splice(3, 3, 6, 7, 8)); // -> [1, 2, 8, 6, 7, 8] //it removes two item and replace three items
  console.log(numbers2);
}

//Adding item to an array using push
//使用push方法添加元素
{
  // syntax
  const arr = ["item1", "item2", "item3"];
  arr.push("new item");

  console.log(arr);
  // ['item1', 'item2','item3','new item']
}

//Removing the end element using pop
//使用pop方法移除元素
{
  const numbers = [1, 2, 3, 4, 5];
  numbers.pop(); // -> remove one item from the end

  console.log(numbers); // -> [1,2,3,4]
}

//Removing an element from the beginning
//移除数组的第一个元素
{
  const numbers = [1, 2, 3, 4, 5];
  numbers.shift(); // -> remove one item from the beginning

  console.log(numbers); // -> [2,3,4,5]
}

//Add an element from the beginning
//为数组的第一个索引位置增加元素
{
  const numbers = [1, 2, 3, 4, 5];
  numbers.unshift(0); // -> add one item from the beginning

  console.log(numbers); // -> [0,1,2,3,4,5]
}

//Reversing array order
//倒着排序数组
{
  const numbers = [1, 2, 3, 4, 5];
  numbers.reverse(); // -> reverse array order

  console.log(numbers); // [5, 4, 3, 2, 1]

  numbers.reverse();
  console.log(numbers); // [1, 2, 3, 4, 5]
}

//Sorting elements in array
//为数组排序
/*
sort: arrange array elements in ascending order. Sort takes a call back function
*/
{
  const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB"
  ];

  webTechs.sort();
  console.log(webTechs); // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

  webTechs.reverse(); // after sorting we can reverse it
  console.log(webTechs); // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]
}

//Array of arrays

{
  const firstNums = [1, 2, 3];
  const secondNums = [1, 4, 9];

  const arrayOfArray = [
    [1, 2, 3],
    [1, 2, 3]
  ];
  console.log(arrayOfArray[0]); // [1, 2, 3]

  const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
  const backEnd = ["Node", "Express", "MongoDB"];
  const fullStack = [frontEnd, backEnd];
  console.log(fullStack); // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
  console.log(fullStack.length); // 2
  console.log(fullStack[0]); // ["HTML", "CSS", "JS", "React", "Redux"]
  console.log(fullStack[1]); // ["Node", "Express", "MongoDB"]
}