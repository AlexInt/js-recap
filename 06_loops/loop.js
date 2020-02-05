// for Loop
{
  for (let i = 0; i <= 5; i++) {
    // console.log(i);
  }
  // 0 1 2 3 4 5

  for (let i = 5; i >= 0; i--) {
    // console.log(i);
  }
  // 5  4  3  2  1  0
}

//while loop
{
  let i = 0;
  while (i <= 5) {
    console.log(i);
    i++;
  }
  // 0 1 2 3 4 5
}

//do while loop
{
  let i = 0;
  do {
    console.log(i);
    i++;
  } while (i <= 5);
  // 0 1 2 3 4 5
}

//for of loop
{
  const numbers = [1, 2, 3, 4, 5];

  for (const num of numbers) {
    console.log(num); //1 2 3 4 5
  }
}

//break,跳出此次循环，不再继续
{
  for (let i = 0; i <= 5; i++) {
    if (i === 3) {
      break;
    }
    console.log(i); //0,1,2
  }
}

//continue 中断此次循环，继续下次循环
{
  for (let i = 0; i <= 5; i++) {
    if (i === 3) {
      continue;
    }
    console.log(i); //0,1,2,4,5
  }
}
