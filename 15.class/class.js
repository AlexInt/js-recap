/*
JavaScript是一种面向对象的编程语言。 JavScript中的所有内容都是具有其属性和方法的对象。我们创建类来创建对象。类就像对象的构造函数，或者是创建对象的“蓝图”。我们实例化一个类来创建一个对象。类定义对象的属性和行为，而对象则表示类。

一旦创建了一个类，我们就可以随时根据需要创建对象。从类创建对象称为类实例化。

在对象部分，我们看到了如何创建对象文字。对象文字是单例。如果要获得类似的对象，则必须编写它。但是，类允许创建许多对象。这有助于减少代码量和代码重复。
*/
{
  //定义一个类
  class Person {
    //构造函数是一个内置函数，它允许as为我们的对象创建一个蓝图。构造函数以关键字constructor开头，后跟括号。在括号内，我们将对象的属性作为参数传递。我们使用this关键字将构造函数参数附加到该类。

    //Default values with constructor
    constructor(
      firstName = "Asabeneh",
      lastName = "Yetayeh",
      age = 250,
      country = "Finland",
      city = "Helsinki"
    ) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.country = country;
      this.city = city;
      this.score = 0; //属性初始值
      this.skills = [];
    }
    getFullName() {
      const fullName = this.firstName + " " + this.lastName;
      return fullName;
    }
    //get 方法
    get getScore() {
      return this.score;
    }
    get getSkills() {
      return this.skills;
    }
    //set 方法
    set setScore(score) {
      this.score += score;
    }
    set setSkill(skill) {
      this.skills.push(skill);
    }
    getPersonInfo() {
      let fullName = this.getFullName();
      let skills =
        this.skills.length > 0 &&
        this.skills.slice(0, this.skills.length - 1).join(", ") +
          ` and ${this.skills[this.skills.length - 1]}`;
      let formattedSkills = skills ? `He knows ${skills}` : "";

      let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`;
      return info;
    }

    //static 方法
    static favoriteSkill() {
      const skills = ["HTML", "CSS", "JS", "React", "Python", "Node"];
      const index = Math.floor(Math.random() * skills.length);
      return skills[index];
    }
    static showDateTime() {
      let now = new Date();
      let year = now.getFullYear();
      let month = now.getMonth() + 1;
      let date = now.getDate();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }

      let dateMonthYear = date + "." + month + "." + year;
      let time = hours + ":" + minutes;
      let fullTime = dateMonthYear + " " + time;
      return fullTime;
    }
  }

  //类的实例化
  const person1 = new Person("Asabeneh", "Yetayeh", 250, "Finland", "Helsinki");
  const person2 = new Person("Lidiya", "Tekle", 28, "Finland", "Espoo");
  const person3 = new Person("John", "Doe", 50, "Mars", "Mars city");

  person1.setScore = 1;
  person1.setSkill = "HTML";
  person1.setSkill = "CSS";
  person1.setSkill = "JavaScript";

  person2.setScore = 1;
  person2.setSkill = "Planning";
  person2.setSkill = "Managing";
  person2.setSkill = "Organizing";

  console.log(person1.getScore);
  console.log(person2.getScore);

  console.log(person1.getSkills);
  console.log(person2.getSkills);
  console.log(person3.getSkills);

  console.log(person1.getPersonInfo());
  console.log(person2.getPersonInfo());
  console.log(person3.getPersonInfo());

  console.log(Person.favoriteSkill());
  console.log(Person.showDateTime());

  //使用继承，我们可以访问父类的所有属性和方法。这减少了代码的重复。如果您还记得的话，我们有一个Person父类，我们将从中创建子类。我们的子类可以是学生，可以老师等。

  //在构造函数中，我们调用super()函数来访问父类的所有属性。 Person类没有性别，但是现在让我们为子类Student提供性别属性。如果子类中使用的方法名称相同，则父方法将被覆盖。
  class Student extends Person {
    constructor(firstName, lastName, age, country, city, gender) {
      super(firstName, lastName, age, country, city);
      this.gender = gender;
    }

    saySomething() {
      console.log("I am a child of the person class");
    }
    getPersonInfo() {
      let fullName = this.getFullName();
      let skills =
        this.skills.length > 0 &&
        this.skills.slice(0, this.skills.length - 1).join(", ") +
          ` and ${this.skills[this.skills.length - 1]}`;

      let formattedSkills = skills ? `He knows ${skills}` : "";
      let pronoun = this.gender == "Male" ? "He" : "She";

      let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`;
      return info;
    }
  }

  const s1 = new Student(
    "Asabeneh",
    "Yetayeh",
    250,
    "Finland",
    "Helsinki",
    "Male"
  );
  const s2 = new Student(
    "Lidiya",
    "Tekle",
    28,
    "Finland",
    "Helsinki",
    "Female"
  );
  s1.setScore = 1;
  s1.setSkill = "HTML";
  s1.setSkill = "CSS";
  s1.setSkill = "JavaScript";

  s2.setScore = 1;
  s2.setSkill = "Planning";
  s2.setSkill = "Managing";
  s2.setSkill = "Organizing";

  console.log(s1);

  console.log(s1.saySomething());
  console.log(s1.getFullName());
  console.log(s1.getPersonInfo());

  console.log(s2.saySomething());
  console.log(s2.getFullName());
  console.log(s2.getPersonInfo());
}
