/*
在本节中，我们将介绍console and console object methods。初学者通常不知道使用哪个：console.log(), document.write() or document.getElementById.

我们使用控制台对象方法在浏览器控制台上显示输出，并使用document.write在浏览器文档（查看端口）上显示输出。两种方法仅用于测试和调试目的。console方法是浏览器上最流行的测试和调试工具。当我们想与DOM交互时，请尝试使用document.getElementById()。我们将在另一部分介绍DOM。

除了著名的console.log()方法之外，控制台还提供其他更多方法方法。
*/

/*
console.log()

We use console.log() to show output on the browser console. We can substitute values and also we can style the logging out put using %c.

我们使用console.log（）在浏览器控制台上显示输出。我们可以替换值，也可以使用％c设置注销样式。
*/

{
  console.log("%d %s of JavaScript", 30, "Days");

  console.log("%c30 Days Of JavaScript", "color:green"); // log output is green

  console.log(
    "%c30 Days%c %cOf%c %cJavaScript",
    "color:green",
    "",
    "color:red",
    "",
    "color:yellow"
  ); // log output green red and yellow text
}

/*
我们使用console.warn() 在浏览器上发出警告。例如，通知或警告弃用软件包版本或不良做法。
*/

{
  console.warn("This is a warning");
  console.warn(
    "You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!"
  );
  console.warn("Warning is different from error");
}

//The console.error() 方法显示错误消息。
{
  console.error("This is an error message");
  console.error("We all make mistakes");
}

/*
The console.table() method display data as a table on the console. Displays tabular data as a table. The console.table() takes one required argument data, which must be an array or an object, and one additional optional parameter columns.

console.table()方法将数据显示为控制台上的表格。将表格数据显示为表格。 console.table()接受一个必需的参数数据（必须是一个数组或一个对象），以及一个附加的可选参数列。
*/
{
  const names = ["Asabeneh", "Brook", "David", "John"];
  console.table(names);
}

{
  const user = {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250
  };
  console.table(user);
}
{
  const countries = [
    ["Finland", "Helsinki"],
    ["Sweden", "Stockholm"],
    ["Norway", "Oslo"]
  ];
  console.table(countries);
}
{
  const users = [
    {
      name: "Asabeneh",
      title: "Programmer",
      country: "Finland",
      city: "Helsinki",
      age: 250
    },
    {
      name: "Eyob",
      title: "Teacher",
      country: "Sweden",
      city: "London",
      age: 25
    },
    {
      name: "Asab",
      title: "Instructor",
      country: "Norway",
      city: "Oslo",
      age: 22
    },
    {
      name: "Matias",
      title: "Developer",
      country: "Denmark",
      city: "Copenhagen",
      age: 28
    }
  ];
  console.table(users);
}

/*
启动计时器，您可以使用该计时器来跟踪操作需要多长时间。您为每个计时器指定一个唯一的名称，并且在给定页面上最多可以运行10,000个计时器。当您使用相同的名称调用console.timeEnd()时，浏览器将输出自计时器启动以来经过的时间（以毫秒为单位）。
*/

{
  const countries = [
    ["Finland", "Helsinki"],
    ["Sweden", "Stockholm"],
    ["Norway", "Oslo"]
  ];

  console.time("Regular for loop");
  for (let i = 0; i < countries.length; i++) {
    console.log(countries[i][0], countries[i][1]);
  }
  console.timeEnd("Regular for loop");
  //Regular for loop: 0.330810546875ms
}
/*
console.info(): 它在浏览器控制台上显示信息消息。
*/
{
  console.info("30 Days Of JavaScript challenge is trending on Github");
  console.info("30 Days Of fullStack challenge might be released");
  console.info("30 Days Of HTML and CSS challenge might be released");
}

/*
如果断言为false，console.assert()方法会将错误消息写入控制台。如果断言为真，则什么都不会发生。第一个参数是断言表达式。如果此表达式为假，将显示断言失败错误消息。
*/

{
  console.assert(4 > 3, "4 is greater than 3"); // no result
  console.assert(3 > 4, "3 is not greater than 4"); // Assertion failed: 3 is not greater than 4
}

/*
The console.group() 可以帮助对不同的日志组进行分组。
*/
{
  const names = ["Asabeneh", "Brook", "David", "John"];
  const countries = [
    ["Finland", "Helsinki"],
    ["Sweden", "Stockholm"],
    ["Norway", "Oslo"]
  ];
  const user = {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250
  };
  const users = [
    {
      name: "Asabeneh",
      title: "Programmer",
      country: "Finland",
      city: "Helsinki",
      age: 250
    },
    {
      name: "Eyob",
      title: "Teacher",
      country: "Sweden",
      city: "London",
      age: 25
    },
    {
      name: "Asab",
      title: "Instructor",
      country: "Norway",
      city: "Oslo",
      age: 22
    },
    {
      name: "Matias",
      title: "Developer",
      country: "Denmark",
      city: "Copenhagen",
      age: 28
    }
  ];

  console.group("Names");
  console.log(names);
  console.groupEnd();

  console.group("Countries");
  console.log(countries);
  console.groupEnd();

  console.group("Users");
  console.log(user);
  console.log(users);
  console.groupEnd();
}

/*
它打印此console.count()被调用的时间。它带有字符串标签参数。计算一个函数被调用的次数非常有帮助。在下面的示例中，console.count()方法将运行三次
*/

{
  const func = () => {
    console.count("Function has been called");
  };
  func();
  func();
  func();

  setTimeout(() => {
    console.clear(); //cleans the browser console.
  }, 10000);
}

/*
console.clear()

The console.clear() cleans the browser console.
*/
