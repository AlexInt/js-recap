// Creating an empty set
{
  const companies = new Set();
  console.log(companies);
}

//Creating set from array
{
  const languages = [
    "English",
    "Finnish",
    "English",
    "French",
    "Spanish",
    "English",
    "French"
  ];

  const setOfLangauges = new Set(languages);
  console.log(setOfLangauges);
}

//Adding an element to a set
{
  const companies = new Set(); // creating an empty set
  console.log(companies.size); // 0

  companies.add("Google"); // add element to the set
  companies.add("Facebook");
  companies.add("Amazon");
  companies.add("Oracle");
  companies.add("Microsoft");

  console.log(companies.size); // 5 elements in the set
  console.log(companies);
}
{
  const companies = ["Google", "Facebook", "Amazon", "Oracle", "Microsoft"];
  setOfCompanies = new Set();
  for (const company of companies) {
    setOfCompanies.add(company);
  }
}

//Deleting an element a set
{
  const companies = new Set(); // creating an empty set
  companies.add("Google"); // add element to the set
  companies.add("Facebook");
  companies.add("Amazon");
  companies.add("Oracle");
  companies.add("Microsoft");

  console.log(companies.delete("Google"));
  console.log(companies.size); // 4 elements left in the set
}
//Checking an element in the set
{
  const companies = new Set(); // creating an empty set
  companies.add("Google"); // add element to the set
  companies.add("Facebook");
  companies.add("Amazon");
  companies.add("Oracle");
  companies.add("Microsoft");

  console.log(companies.has("Apple")); // false
  console.log(companies.has("Facebook")); // true
}

//Clearing the set
{
  const companies = new Set(); // creating an empty set
  companies.add("Google"); // add element to the set
  companies.add("Facebook");
  companies.add("Amazon");
  companies.add("Oracle");
  companies.add("Microsoft");

  companies.clear();
  console.log(companies);
}
/*
Union of sets 并集
使用散布运算符可以找到两个集合的并集。让我们找到集合A和集合B（A U B）的并集
*/
{
  let a = [1, 2, 3, 4, 5];
  let b = [3, 4, 5, 6];
  let c = [...a, ...b];

  let A = new Set(a);
  let B = new Set(b);
  let C = new Set(c);

  console.log(C);
}
/*
Intersection of sets 交集
查找两个集合的交集可以使用过滤器来实现。让我们找到集合A和集合B的并集（A∩B）
*/
{
  let a = [1, 2, 3, 4, 5];
  let b = [3, 4, 5, 6];

  let A = new Set(a);
  let B = new Set(b);

  let c = a.filter(num => B.has(num));
  let C = new Set(c);

  console.log(C);
}

/*
Difference of sets
要找到两组之间的差异，可以使用过滤器。让我们找出集合A和集合B（A \ B）的不同之处
*/
{
  let a = [1, 2, 3, 4, 5];
  let b = [3, 4, 5, 6];

  let A = new Set(a);
  let B = new Set(b);

  let c = a.filter(num => !B.has(num));
  let C = new Set(c);

  console.log(C);
}

/*Map*/

// Creating an empty Map
{
  const map = new Map();
  console.log(map);
}

//Creating an Map from array
{
  countries = [
    ["Finland", "Helsinki"],
    ["Sweden", "Stockholm"],
    ["Norway", "Oslo"]
  ];
  const map = new Map(countries);
  console.log(map);
  console.log(map.size);
}

//Adding values to the Map
{
  const countriesMap = new Map();
  console.log(countriesMap.size); // 0
  countriesMap.set("Finland", "Helsinki");
  countriesMap.set("Sweden", "Stockholm");
  countriesMap.set("Norway", "Oslo");
  console.log(countriesMap);
  console.log(countriesMap.size);
}

//Getting a value from Map
{
  const countriesMap = new Map();
  countriesMap.set("Finland", "Helsinki");
  countriesMap.set("Sweden", "Stockholm");
  countriesMap.set("Norway", "Oslo");

  console.log(countriesMap.get("Finland"));
}

//Checking key in Map
{
  const countriesMap = new Map();
  countriesMap.set("Finland", "Helsinki");
  countriesMap.set("Sweden", "Stockholm");
  countriesMap.set("Norway", "Oslo");

  console.log(countriesMap.has("Finland"));

  for (const country of countriesMap) {
    console.log(country);
  }

  for (const [country, city] of countriesMap) {
    console.log(country, city);
  }
}
