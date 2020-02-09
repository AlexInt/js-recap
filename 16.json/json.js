/*
JSON代表JavaScript Object Notation。 JSON语法派生自JavaScript对象表示法语法，但JSON格式仅是文本或字符串。 JSON是用于存储和传输的轻量数据格式。当数据从服务器发送到客户端时，通常使用JSON。 JSON是XML的一种易于使用的替代方法。
*/

/*
区别在于JSON对象的键应使用双引号或应为字符串。 JavaScript Object和JSON非常相似，我们可以将JSON更改为Object并将Object更改为JSON。
*/

// Converting JSON to JavaScript Object
//当我们想将JSON更改为对象时，我们使用JSON.parse()解析JSON。当我们想将对象更改为JSON时，我们使用JSON.stringify()。

{
  const usersText = `{
"users":[
  {
    "firstName":"Asabeneh",
    "lastName":"Yetayeh",
    "age":250,
    "email":"asab@asb.com"
  },
  {
    "firstName":"Alex",
    "lastName":"James",
    "age":25,
    "email":"alex@alex.com"
  },
  {
  "firstName":"Lidiya",
  "lastName":"Tekle",
  "age":28,
  "email":"lidiya@lidiya.com"
  }
]
}`;

  const usersObj = JSON.parse(usersText, undefined, 4);
  const arr = usersObj["users"];
  console.log(usersObj);
  console.log(arr);
}

//Converting Object to JSON
/*
JSON.stringify(obj, replacer, space)
当我们想将对象更改为JSON时，我们使用JSON.stringify()。 stringify方法采用一个必需参数和两个可选参数。replacer用作过滤器，space为缩进数值。如果我们不想从对象中过滤掉任何键，我们可以传递undefined。
*/

{
  const users = {
    Alex: {
      email: "alex@alex.com",
      skills: ["HTML", "CSS", "JavaScript"],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: "asab@asab.com",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Redux",
        "MongoDB",
        "Express",
        "React",
        "Node"
      ],
      age: 25,
      isLoggedIn: false,
      points: 50
    }
  };

  const txt = JSON.stringify(users, undefined, 4);
  console.log(txt); // text means JSON- because json is a string form of an object.
}

//Using a Filter Array with JSON.stringify

/*
现在，让我们使用replacer作为filter。用户对象的键列表很长，但是我们只对其中的几个感兴趣。我们将要保留的键放在示例中所示的数组中，并用它代替替换符。
*/

{
  const user = {
    firstName: "Asabeneh",
    lastName: "Yetayeh",
    country: "Finland",
    city: "Helsinki",
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Pyhton"],
    age: 250,
    isLoggedIn: false,
    points: 30
  };

  const txt = JSON.stringify(
    user,
    ["firstName", "lastName", "country", "city", "age"],
    1
  );
  console.log(txt);
}
