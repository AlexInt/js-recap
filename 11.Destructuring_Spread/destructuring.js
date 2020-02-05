/*
Destructuring
解构是一种解压缩数组和对象并分配给不同变量的方法。
*/

//Destructing Arrays 解构数组
{
  const numbers = [1, 2, 3];
  let [numOne, numTwo, numThree] = numbers;

  console.log(numOne, numTwo, numThree);

  const scientificConstants = [2.72, 3.14, 9.81, 37, 100];
  let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants;

  console.log(e, pi, gravity, bodyTemp, boilingTemp);

  const fullStack = [
    ["HTML", "CSS", "JS", "React"],
    ["Node", "Express", "MongoDB"]
  ];
  const [frontEnd, backEnd] = fullStack;

  console.log(frontEnd);
  console.log(backEnd);
}
/*
如果我们想跳过数组中的值，请使用其他逗号。逗号有助于省略该特定索引处的值
*/
{
  const numbers = [1, 2, 3];
  let [numOne, , numThree] = numbers; //2 is omitted

  console.log(numOne, numThree);
}

/*
如果该索引的数组值是undefined，我们可以使用默认值：
*/

{
  const names = [undefined, "Brook", "David"];
  let [
    firstPerson = "Asabeneh",
    secondPerson,
    thirdPerson,
    fourthPerson = "John"
  ] = names;

  console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);
}
/*
We can not assign variable to all the elements in the array. We can destructure few of the first and we can get the remaining as array using spread operator(...).
*/
/*
我们不能将变量分配给数组中的所有元素。我们可以解构第一个中的几个，然后可以使用散布运算符（...）将其余的作为数组。
*/

{
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let [num1, num2, num3, ...rest] = nums;

  console.log(num1, num2, num3);
  console.log(rest);
}

/*
迭代过程中的解构
*/
{
  const fullStack = [
    ["HTML", "CSS", "JS", "React"],
    ["Node", "Express", "MongoDB"]
  ];

  for (const [first, second, third] of fullStack) {
    console.log(first, second, third);
  }
}

//解构对象
/*
解构时，用于解构的变量名称应与对象的键或属性完全相同。
*/

{
  const rectangle = {
    width: 20,
    height: 10,
    area: 200
  };
  let { width, height, area, perimeter } = rectangle;

  console.log(width, height, area, perimeter);
}

/*
解构过程中重命名
*/
{
  const rectangle = {
    width: 20,
    height: 10,
    area: 200
  };
  let { width: w, heigh: h, area: a, perimeter: p } = rectangle;

  console.log(w, h, a, p);
}
/*
如果在对象中找不到key，则变量将分配为undefined。如果key不在对象中，我们可以在声明过程中提供默认值。
*/

{
  const rectangle = {
    width: 20,
    height: 10,
    area: 200
  };
  let { width, height, area, perimeter = 60 } = rectangle;

  console.log(width, height, area, perimeter); //20 10 200 60
  //Lets modify the object:width to 30 and perimeter to 80
}
{
  const rectangle = {
    width: 30,
    height: 10,
    area: 200,
    perimeter: 80
  };
  let { width, height, area, perimeter = 60 } = rectangle;
  console.log(width, height, area, perimeter); //20 10 200 80
}

//Object parameter without destructuring
{
  // Without destructuring
  const rect = {
    width: 20,
    height: 10
  };
  const calculatePerimeter = rectangle => {
    return 2 * (rectangle.width + rectangle.height);
  };

  console.log(calculatePerimeter(rect)); // 60
}

//Object parameter with destructuring
{
  const rect = {
    width: 20,
    height: 10
  };
  const calculatePerimeter = ({ width, height }) => {
    return 2 * (width + height);
  };

  console.log(calculatePerimeter(rect)); // 60
}

{
  const person = {
    firstName: "Asabeneh",
    lastName: "Yetayeh",
    age: 250,
    country: "Finland",
    job: "Instructor and Developer",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Redux",
      "Node",
      "MongoDB",
      "Python",
      "D3.js"
    ],
    languages: ["Amharic", "English", "Suomi(Finnish)"]
  };
  // Lets create a function which give information about the person object with destructuring
  const getPersonInfo = ({
    firstName,
    lastName,
    age,
    country,
    job,
    skills,
    languages
  }) => {
    const formattedSkills = skills.slice(0, -1).join(", ");
    const formattedLanguages = languages.slice(0, -1).join(", ");

    personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${
      skills[skills.length - 1]
    }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`;

    return personInfo;
  };
  console.log(getPersonInfo(person));
}

/*
Destructuring object during iteration
*/

{
  const todoList = [
    {
      task: "Prepare JS Test",
      time: "4/1/2020 8:30",
      completed: true
    },
    {
      task: "Give JS Test",
      time: "4/1/2020 10:00",
      completed: false
    },
    {
      task: "Assess Test Result",
      time: "4/1/2020 1:00",
      completed: false
    }
  ];

  for (const { task, time, completed } of todoList) {
    console.log(task, time, completed);
  }
}

/*
圆括号问题
解构赋值虽然很方便，但是解析起来并不容易。对于编译器来说，一个式子到底是模式，还是表达式，没有办法从一开始就知道，必须解析到（或解析不到）等号才能知道。

由此带来的问题是，如果模式中出现圆括号怎么处理。ES6 的规则是，只要有可能导致解构的歧义，就不得使用圆括号。

但是，这条规则实际上不那么容易辨别，处理起来相当麻烦。因此，建议只要有可能，就不要在模式中放置圆括号。
*/