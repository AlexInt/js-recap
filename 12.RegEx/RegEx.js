/*
https://www.w3school.com.cn/jsref/jsref_obj_regexp.asp
正则表达式或RegEx是一种小型编程语言，有助于查找数据中的模式。 RegEx可用于检查某些模式是否存在于不同的数据类型中。要在JavaScript中使用RegEx，可以使用RegEx构造函数，也可以使用两个正斜杠后跟一个标志来声明RegEx模式。我们可以通过两种方式创建模式。

要声明一个字符串，我们使用单引号，将反引号双引号声明一个正则表达式，我们使用两个正斜杠和一个可选标志。标志可以是g，i，m，s，u或y。
*/

//RegEx parameters
/*
正则表达式带有两个参数。一个必需的搜索模式和一个可选标志。
*/

/*
Pattern
模式可以是文本或具有某种相似性的任何形式的模式pattern。例如，电子邮件中的垃圾邮件一词可能是我们希望在电子邮件中寻找的模式，或者电话号码格式的数字可能是我们要寻找的。
*/

/*
Flags
标志是正则表达式中的可选参数，用于确定搜索的类型。让我们看一些标志：

- g: is a global flag which means looking for a pattern in whole text
- i: case insensitive flag(it searches for both lowercase and uppercase)
- m: multiline
*/

//Creating a pattern with RegExp Constructor
{
  //  without global flag and case insensitive flag.
  let pattern = "love";
  let regEx = new RegExp(pattern);
}

{
  //with global flag and case insensitive flag.
  let pattern = "love";
  let flag = "gi";
  let regEx = new RegExp(pattern, flag);
}

//Creating a pattern without RegExp Constructor
{
  //with global flag and case insensitive flag.
  let regEx = /love/gi; //等同于let regEx= new RegEx('love','gi')
}

/*
RegExp Object Methods
*/

//Testing for  a match
{
  const str = "I love JavaScript";
  const pattern = /love/;
  const result = pattern.test(str);
  console.log(result);
}

//Array containing all of the match
{
  const str = "I love JavaScript";
  const pattern = /love/;
  const result = str.match(pattern);
  console.log(result);
}
//如果不使用全局标志，则match（）返回包含模式，索引，输入和组 的数组。
{
  const str = "I love JavaScript";
  const pattern = /love/g;
  const result = str.match(pattern);
  console.log(result);
}

//search(): 测试字符串中的匹配项。它返回匹配的索引，如果搜索失败，则返回-1。
{
  const str = "I love JavaScript";
  const pattern = /love/g;
  const result = str.search(pattern);
  console.log(result);
}

//Replacing a substring
//replace(): 执行搜索字符串中的匹配项，并将匹配的子字符串替换为替换子字符串。
{
  const txt =
    "Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language";

  matchReplaced = txt.replace(/Python|python/, "JavaScript");
  console.log(matchReplaced);
}
{
  const txt =
    "Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language";

  matchReplaced = txt.replace(/Python/gi, "JavaScript");
  console.log(matchReplaced);
}

{
  const txt =
    "%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.";

  matches = txt.replace(/%/g, "");
  console.log(matches);
}
/*
[]：方括号用于查找某个范围内的字符：
  [a-c]表示a或b或c
  [a-z]表示a到z的任何字母
  [A-Z]表示从A到Z的任何字符
  [0-3]表示0或1或2或3
  [0-9]表示0到9之间的任何数字
  [A-Za-z0-9]从a到z，A到Z，0到9的任何字符

\：用于转义特殊字符
  \ d mean：匹配，其中字符串包含数字（0-9之间的数字）
  \ D表示：匹配字符串不包含数字的地方
. ：除换行符（\n）以外的任何字符

^：作为开头
  r'^substring'，例如r'^love'，以love开头的句子
  r'[^abc]表示不是a，不是b，不是c。

$：作为结束
  r'substring $'例如r'love $'，句子结尾为love

* ：零次或多次
  r'[a] *'表示可选，也可以多次出现。

+：一次或多次
  r'[a] +'至少一次或多次

?：零或一倍
  r'[a]？'平均零次或一次

{3}：正好3个字符
{3，}：至少3个字符
{3,8}：3到8个字符

|：要么
  r'apple | banana'表示苹果或香蕉

()：捕获并分组

方括号用于查找某个范围内的字符：
[abc]	            查找方括号之间的任何字符。
[^abc]	            查找任何不在方括号之间的字符。
[0-9]	            查找任何从 0 至 9 的数字。
[a-z]	            查找任何从小写 a 到小写 z 的字符。
[A-Z]	            查找任何从大写 A 到大写 Z 的字符。
[A-z]	            查找任何从大写 A 到小写 z 的字符。
[adgk]	            查找给定集合内的任何字符。
[^adgk]	            查找给定集合外的任何字符。
(red|blue|green)	查找任何指定的选项。

元字符
.	查找单个字符，除了换行和行结束符。
\w	查找单词字符。
\W	查找非单词字符。
\d	查找数字。
\D	查找非数字字符。
\s	查找空白字符。
\S	查找非空白字符。
\b	匹配单词边界。
\B	匹配非单词边界。
\0	查找 NUL 字符。
\n	查找换行符。
\f	查找换页符。
\r	查找回车符。
\t	查找制表符。
\v	查找垂直制表符。
\xxx	查找以八进制数 xxx 规定的字符。
\xdd	查找以十六进制数 dd 规定的字符。
\uxxxx	查找以十六进制数 xxxx 规定的 Unicode 字符。

量词
n+	    匹配任何包含至少一个 n 的字符串。
n*	    匹配任何包含零个或多个 n 的字符串。
n?	    匹配任何包含零个或一个 n 的字符串。
n{X}	匹配包含 X 个 n 的序列的字符串。
n{X,Y}	匹配包含 X 至 Y 个 n 的序列的字符串。
n{X,}	匹配包含至少 X 个 n 的序列的字符串。
n$	    匹配任何结尾为 n 的字符串。
^n	    匹配任何开头为 n 的字符串。
?=n	    匹配任何其后紧接指定字符串 n 的字符串。
?!n	    匹配任何其后没有紧接指定字符串 n 的字符串。
*/

// Square Bracket []
{
  const pattern = /[Aa]pple|[Bb]anana/g; // this square bracket mean either A or a
  const txt =
    "Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.";
  const matches = txt.match(pattern);

  console.log(matches);
}

//Escape character(\) in RegEx
//元字符（Metacharacter）是拥有特殊含义的字符：
{
  const pattern = /\d/g; // d is a special character which means digits
  const txt = "This regular expression example was made in January 12,  2020.";
  const matches = txt.match(pattern);

  console.log(matches); // ["1", "2", "2", "0", "2", "0"], this is not what we want
}
//One or more times(+)
{
  const pattern = /\d+/g; // d is a special character which means digits
  const txt = "This regular expression example was made in January 12,  2020.";
  const matches = txt.match(pattern);

  console.log(matches); // ["12", "2020"], this is not what we want
}
//Period(.)
{
  //此方括号表示a 和 . 表示除换行外的任何字符
  const pattern = /[a]./g;
  const txt = "Apple and banana are fruits";
  const matches = txt.match(pattern);

  console.log(matches); // ["an", "an", "an", "a ", "ar"]
}
{
  const pattern = /[a].+/g; // . 任何字符, + 任何字符一次或多次
  const txt = "Apple and banana are fruits";
  const matches = txt.match(pattern);

  console.log(matches); // ['and banana are fruits']
}

//零次或更多次（*）
//零或很多次。该模式可能不会发生，也可能会发生很多次。
{
  const pattern = /[a].*/g;
  const txt = "Apple and banana are fruits";
  const matches = txt.match(pattern);

  console.log(matches); // ['and banana are fruits']
}

//零或一次。该模式可能不会发生，也可能会发生一次。
{
  const txt =
    "I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.";
  const pattern = /[Ee]-?mail/g; // ? means optional
  matches = txt.match(pattern);

  console.log(matches); // ["e-mail", "email", "Email", "E-mail"]
}

//正则表达式中的量词 
/*
我们可以使用大括号指定在文本中查找的子字符串的长度。想象一下，我们对子字符串的长度为4个字符感兴趣
*/
{
  const txt = "This regular expression example was made in December 6,  2019.";
  const pattern = /\d{4}/g; // exactly four times
  const matches = txt.match(pattern);
  console.log(matches); // ['2019']
}
{
  const txt = "This regular expression example was made in December 6,  2019.";
  const pattern = /\d{1,4}/g; // 1 to 4
  const matches = txt.match(pattern);
  console.log(matches); // ['6', '2019']
}

//Cart ^
{
  const txt = "This regular expression example was made in December 6,  2019.";
  const pattern = /^This/; // ^ 表示以此开头
  const matches = txt.match(pattern);
  console.log(matches); // ['This']
}
{
  const txt = "This regular expression example was made in December 6,  2019.";
  const pattern = /[^A-Za-z,. ]+/g; //设置字符中的^表示取反，不是A到Z，不是a到z，没有空格，没有逗号，没有句点
  const matches = txt.match(pattern);
  console.log(matches); // ["6", "2019"]
}

//完全符合 
{
  //它应该以^开头和$为结尾。
  let pattern = /^[A-Z][a-z]{3,12}$/;
  let name = "Asabeneh";
  let result = pattern.test(name);

  console.log(result); // true
}