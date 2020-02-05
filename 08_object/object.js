//Creating an empty object
{
    const person = {};
}

//Creating an objecting with values
{
    const rectangle = {
      length: 20,
      width: 20
    };
    console.log(rectangle); // {length: 20, width: 20}

    const person = {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
      age: 250,
      country: "Finland",
      city: "Helsinki",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node",
        "MongoDB",
        "Python",
        "D3.js"
      ],
      isMarried: true
    };
    console.log(person);
}

//Getting values from an object
{
    const person = {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
      age: 250,
      country: "Finland",
      city: "Helsinki",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node",
        "MongoDB",
        "Python",
        "D3.js"
      ],
      getFullName: function() {
        return `${this.firstName}${this.lastName}`;
      },
      "phone number": "+3584545454545"
    };

    // accessing values using .
    console.log(person.firstName);
    console.log(person.lastName);
    console.log(person.age);
    console.log(person.location);

    // value can be accessed using square bracket and key name
    console.log(person["firstName"]);
    console.log(person["lastName"]);
    console.log(person["age"]);
    console.log(person["location"]);

    // for instance to access the phone number we only use the square bracket method
    console.log(person["phone number"]);
}

//Creating object methods
{
  const person = {
    firstName: "Asabeneh",
    lastName: "Yetayeh",
    age: 250,
    country: "Finland",
    city: "Helsinki",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node",
      "MongoDB",
      "Python",
      "D3.js"
    ],
    getFullName: function() {
      return `${this.firstName} ${this.lastName}`;
    }
  };

  console.log(person.getFullName());
  // Asabeneh Yetayeh
}

//Setting new key for an object
/*对象是一个可变的数据结构，我们可以在对象创建后修改它的内容。*/
{
    const person = {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
      age: 250,
      country: "Finland",
      city: "Helsinki",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node",
        "MongoDB",
        "Python",
        "D3.js"
      ],
      getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
      }
    };
    person.nationality = "Ethiopian";
    person.country = "Finland";
    person.title = "teacher";
    person.skills.push("Meteor");
    person.skills.push("SasS");
    person.isMarried = true;

    person.getPersonInfo = function() {
      let skillsWithoutLastSkill = this.skills
        .splice(0, this.skills.length - 1)
        .join(", ");
      let lastSkill = this.skills.splice(this.skills.length - 1)[0];

      let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`;
      let fullName = this.getFullName();
      let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`;
      return statement;
    };
    console.log(person);
    console.log(person.getPersonInfo());
}

/*对象方法：
*/
{
  const person = {
    firstName: "Asabeneh",
    age: 250,
    country: "Finland",
    city: "Helsinki",
    skills: ["HTML", "CSS", "JS"],
    title: "teacher",
    address: {
      street: "Heitamienkatu 16",
      pobox: 2002,
      city: "Helsinki"
    },
    getPersonInfo: function() {
      return `I am ${this.firstName} and I live in ${city}, ${this.country}. I am ${this.age}.`;
    }
  };

  //Object methods: Object.assign, Object.keys, Object.values, Object.entries
  //hasOwnProperty

  //Object.assign: To copy an object without modifying the original object
  const copyPerson = Object.assign({}, person);
  console.log(copyPerson);

  //Object.keys: To get the keys or properties of an object as an array
  const keys = Object.keys(copyPerson);
  console.log(keys); //['name', 'age', 'country', 'skills', 'address', 'getPersonInfo']
  const address = Object.keys(copyPerson.address);
  console.log(address); //['street', 'pobox', 'city']

  //Object.values:To get values of an object as an array
  const values = Object.values(copyPerson);
  console.log(values);

  //Object.entries: To get the keys and values in an array
  const entries = Object.entries(copyPerson);
  console.log(entries);

  //hasOwnProperty: To check if a specific key or property exist in an object
  console.log(copyPerson.hasOwnProperty("name"));
  console.log(copyPerson.hasOwnProperty("score"));
}