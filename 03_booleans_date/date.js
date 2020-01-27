// Creating a time object
{
  const now = new Date();
  console.log(now); // Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)
}
//Getting full year
{
  const now = new Date();
  console.log(now.getFullYear()); // 2020
}
//Getting month
{
  const now = new Date();
  console.log(now.getMonth()); // 0, because the month is January,  month(0-11)
}
//Getting date
{
  const now = new Date();
  console.log(now.getDate()); // 27, because the day of the month is 4th,  day(0-31)
}
//Getting day
{
  const now = new Date();
  console.log(now.getDay()); // 6, because the day is Saturday which is the 5th day,
  // Getting the weekday as a number (0-6)
}
//Getting hours
{
  const now = new Date();
  console.log(now.getHours()); // 0, because the time is 00:56:41
}
//Getting minutes
{
  const now = new Date();
  console.log(now.getMinutes()); // 56, because the time is 00:56:41
}
//Getting seconds
{
  const now = new Date();
  console.log(now.getSeconds()); // 41, because the time is 00:56:41
}

/*
Getting time
*/
{
  const now = new Date(); //
  console.log(now.getTime()); // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41
}

{
  const allSeconds = Date.now(); //
  console.log(allSeconds); // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41

  const timeInSeconds = new Date().getTime();
  console.log(allSeconds == timeInSeconds); // true
}

{
  const now = new Date();
  const year = now.getFullYear(); // return year
  const month = now.getMonth() + 1; // return month(0 - 11)
  const date = now.getDate(); // return date (1 - 31)
  const hours = now.getHours(); // return number (0 - 23)
  const minutes = now.getMinutes(); // return number (0 -59)

  console.log(`${date}/${month}/${year} ${hours}:${minutes}`); // 4/1/2020 0:56
}