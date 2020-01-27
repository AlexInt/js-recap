//获取字符串中的字符
{
let string = "JavaScript";
let firstLetter = string[0];
console.log(firstLetter); // J
let secondLetter = string[1]; // a
let thirdLetter = string[2];
let lastLetter = string[9];
console.log(lastLetter); // t
let lastIndex = string.length - 1;
console.log(lastIndex); // 9
console.log(string[lastIndex]); // t
}

// charAt(): Takes index and it returns the value at that index
{
  let string = "30 Days Of JavaScript";
  console.log(string.charAt(0)); // 3
  let lastIndex = string.length - 1;
  console.log(string.charAt(lastIndex)); // t
}
//charCodeAt(): Takes index and it returns char code(ASCII number) of the value at that index
{
  let string = "30 Days Of JavaScript";
  console.log(string.charCodeAt(3)); // D ASCII number is 68
  let lastIndex = string.length - 1;
  console.log(string.charCodeAt(lastIndex)); // t ASCII is 116
}

// concat(): it takes many substrings and creates concatenation.
{
  // string.concat(substring, substring, substring)
  let string = "30";
  console.log(string.concat("Days", "Of", "JavaScript")); // 30DaysOfJavaScript
  let country = "Fin";
  console.log(country.concat("land")); // Finland
}
/*
 endsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
*/
{
  // string.endsWith(substring)
  let string = "Love is the best to in this world";
  console.log(string.endsWith("world")); // true
  console.log(string.endsWith("love")); // false
  console.log(string.endsWith("in this world")); // true

  let country = "Finland";
  console.log(country.endsWith("land")); // true
  console.log(country.endsWith("fin")); // false
  console.log(country.endsWith("Fin")); //  false
}
/*
includes(): It takes a substring argument and it check if substring argument exists in the string. includes() returns a boolean. It checks if a substring exist in a string and it returns true if it exists and false if it doesn't exist.
*/
{
  let string = "30 Days Of JavaScript";
  console.log(string.includes("Days")); // true
  console.log(string.includes("days")); // false
  console.log(string.includes("Script")); // true
  console.log(string.includes("script")); // false
  console.log(string.includes("java")); // false
  console.log(string.includes("Java")); // true

  let country = "Finland";
  console.log(country.includes("fin")); // false
  console.log(country.includes("Fin")); // true
  console.log(country.includes("land")); // true
  console.log(country.includes("Land")); // false
}

/*
indexOf(): Takes takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1
*/
{
//   string.indexOf(substring);
  let string = "30 Days Of JavaScript";
  console.log(string.indexOf("D")); // 3
  console.log(string.indexOf("Days")); // 3
  console.log(string.indexOf("days")); // -1
  console.log(string.indexOf("a")); // 4
  console.log(string.indexOf("JavaScript")); // 11
  console.log(string.indexOf("Script")); //15
  console.log(string.indexOf("script")); // -1
}
/*
lastIndexOf(): Takes takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1
*/
{
  let string =
    "I love JavaScript. If you do not love JavaScript what else can you love.";
  console.log(string.lastIndexOf("love")); // 67
  console.log(string.lastIndexOf("you")); // 63
  console.log(string.lastIndexOf("JavaScript")); // 38
}

/*
length: The string length method returns the number of characters in a string included empty space. Example:
*/
{
  let js = "JavaScript";
  console.log(js.length); // 10
  let firstName = "Asabeneh";
  console.log(firstName.length); // 8
}
/*
match: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign.
*/
{
  let string = "love";
  let patternOne = /love/; // with out any flag
  let patternTwo = /love/gi; // g-means to search in the whole text, i - case insensitive
//   string.match(substring);
  let string1 =
    "I love JavaScript. If you do not love JavaScript what else can you love.";
  console.log(string1.match("love")); //
  /*
output

["love", index: 2, input: "I love JavaScript. If you do not love JavaScript what else can you love.", groups: undefined]
*/
  let pattern = /love/gi;
  console.log(string.match(pattern)); // ["love", "love", "love"]
  // Let us extract numbers from text using regular expression. This is not regular expression section, no panic.

  let text =
    "In 2019, I run 30 Days of Pyhton. Now, in 2020 I super exited to start this challenge";
  let regEx = /\d+/; // d with escape character means d not a normal d instead acts a digit
  // + means one or more digit numbers,
  // if there is g after that it means global, search everywhere.
  console.log(text.match(regEx)); // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
  console.log(text.match(/\d+/g)); // ["2019", "30", "2020"]
}
/*
repeat(): it takes a number argument and it returned the repeated version of the string.
*/
{
  // string.repeat(n)
  let string = "love";
  console.log(string.repeat(10)); // lovelovelovelovelovelovelovelovelovelove
}

/*
replace(): takes to parameter the old substring and new substring.
*/
{
  // string.replace(oldsubstring, newsubstring)

  let string = "30 Days Of JavaScript";
  console.log(string.replace("JavaScript", "Python")); // 30 Days Of Python
  let country = "Finland";
  console.log(country.replace("Fin", "Noman")); // Nomanland
}

/*
search: it takes a substring as an argument and it returns the index of the first match.
*/
{
  // string.search(substring)
  let string =
    "I love JavaScript. If you do not love JavaScript what else can you love.";
  console.log(string.search("love")); // 2
}

/*
split(): The split method splits a string at a specified place.
*/
{
  let string = "30 Days Of JavaScipt";
  console.log(string.split()); // ["30 Days Of JavaScript"]
  console.log(string.split(" ")); // ["30", "Days", "Of", "JavaScript"]
  let firstName = "Asabeneh";
  console.log(firstName.split()); // ["Asabeneh"]
  console.log(firstName.split("")); // ["A", "s", "a", "b", "e", "n", "e", "h"]
  let countries = "Finland, Sweden, Norway, Denmark, and Iceland";
  console.log(countries.split(",")); // ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
  console.log(countries.split(", ")); //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]
}
/*
startsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
*/
{
  // string.startsWith(substring)
  let string = "Love is the best to in this world";
  console.log(string.startsWith("Love")); // true
  console.log(string.startsWith("love")); // false
  console.log(string.startsWith("world")); // false

  let country = "Finland";
  console.log(country.startsWith("Fin")); // true
  console.log(country.startsWith("fin")); // false
  console.log(country.startsWith("land")); //  false
}
/*
substr(): It takes two arguments,the starting index and number of characters to slice.
*/
{
  let string = "JavaScript";
  console.log(string.substr(4, 6)); // Script
  let country = "Finland";
  console.log(country.substr(3, 4)); // land
}
/*
substring(): It takes two arguments,the starting index and the stopping index but it doesn't include the stopping index.
*/
{
  let string = "JavaScript";
  console.log(string.substring(0, 4)); // Java
  console.log(string.substring(4, 10)); // Script
  console.log(string.substring(4)); // Script
  let country = "Finland";
  console.log(country.substring(0, 3)); // Fin
  console.log(country.substring(3, 7)); // land
  console.log(country.substring(3)); // land
}
/*
toLowerCase(): this method changes the string to lowercase letters.
*/
{
  let string = "JavasCript";
  console.log(string.toLowerCase()); // javascript
  let firstName = "Asabeneh";
  console.log(firstName.toLowerCase()); // asabeneh
  let country = "Finland";
  console.log(country.toLowerCase()); // finland
}
/*
toUpperCase(): this method changes the string to uppercase letters.
*/
{
  let string = "JavaScript";
  console.log(string.toUpperCase()); // JAVASCRIPT
  let firstName = "Asabeneh";
  console.log(firstName.toUpperCase()); // ASABENEH
  let country = "Finland";
  console.log(country.toUpperCase()); // FINLAND
}
/*
trim(): Removes trailing space in the beginning or the end of a string.
*/
{
  let string = "   30 Days Of JavaScript   ";
  console.log(string); //
  console.log(string.trim(" ")); //
  let firstName = " Asabeneh ";
  console.log(firstName);
  console.log(firstName.trim()); //
}