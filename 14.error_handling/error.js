//JavaScript是一种非强类型的语言。有时，当您尝试访问未定义的变量或调用未定义的函数等时，会出现运行时错误。 

/*
try: 将可能在try块中引发错误的可疑代码包装起来。try语句使我们可以定义一个代码块，以在执行该代码块时对其进行测试

catch ：在发生错误时编写代码以在catch块中执行某些操作。 catch块可以具有将为您提供错误信息的参数。catch块用于记录错误或向用户显示特定消息。

finally ：无论错误发生如何，finally块将始终执行。 finally块可用于完成其余任务或重置在try块中发生错误之前可能已更改的变量。
*/

{
    try {
      let lastName = "Yetayeh";
      let fullName = fistName + " " + lastName;
    } catch (err) {
      console.error(err); // we can use console.log() or console.error()
    } finally {
      console.log("In any case I will be executed");
    }
}

/*
throw：throw语句使我们可以创建自定义错误。我们可以通过字符串，数字，布尔值或对象。使用throw语句引发异常。引发异常时，表达式指定异常的值。以下各项均引发异常：
*/ 

{
    const throwErroExampleFun = () => {
      let message;
      let x = prompt("Enter a number: ");
      try {
        if (x == "") throw "empty";
        if (isNaN(x)) throw "not a number";
        x = Number(x);
        if (x < 5) throw "too low";
        if (x > 10) throw "too high";
      } catch (err) {
        console.log(err);
      }
    };
    throwErroExampleFun();
}

/*
Error Types:
ReferenceError: An illegal reference has occurred. A ReferenceError is thrown if we use a variable that has not been declared.

SyntaxError: A syntax error has occurred

TypeError: A type error has occurred
*/