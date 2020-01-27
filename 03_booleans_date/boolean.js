/*
### 真值

1. 零以外的所有数字类型（包括正值与负值）都是真
2. 所有的字符串类型都是真
3. 布尔的true为真

### 假值

1. 0(零)
2. 0n(零N)
3. null （null , means no value）
4. undefined（如果我们声明一个变量，如果我们不赋值，这个值将是undefined。）
5. NaN
6. 布尔的false
7. '', "", ``, 空字符串
*/
{
    let neg = -1;
    if (neg) {
        console.log("negative numbers are truthy")
    }
    let zero = 0;
    if (zero) {

    }else{
        console.log("zero is falsy")
    }

    let a = 0n;
    if (a) {

    } {
       console.log("0n is falsy"); 
    }
    let b = ``
    if (!b){
        console.log("`` is falsy"); 
    }
    let c = '';
    if (!c) {
      console.log("'' is falsy");
    }
}