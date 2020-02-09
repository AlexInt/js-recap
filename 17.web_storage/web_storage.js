/*
Web Storage（sessionStorage和localStorage）是一种新的HTML5 API，与传统的cookie相比，具有重要的优势。在HTML5之前，应用程序数据必须存储在cookie中，并包含在每个服务器请求中。 Web存储更加安全，并且可以在本地存储大量数据，而不会影响网站性能。在许多Web浏览器中，每个cookie的cookie数据存储限制约为4 KB。Web Storage可以存储更大的数据（至少5MB），并且永远不会传输到服务器。来自相同或一个来源的所有站点都可以存储和访问相同的数据。

可以使用JavaScript访问存储的数据，这使您能够利用客户端脚本来完成许多传统上涉及服务器端编程和关系数据库的事情。有两个Web存储对象：

- sessionStorage
- localStorage

localStorage与sessionStorage相似，不同之处在于，localStorage中存储的数据没有到期时间，但是在页面会话session结束时（即在关闭页面时），存储在sessionStorage中的数据将被清除。

应该注意的是，存储在localStorage或sessionStorage中的数据特定于页面协议。

键和值始终是字符串（请注意，与对象一样，整数键将自动转换为字符串）。

sessionStorage仅在浏览器选项卡或窗口会话中可用。它旨在将数据存储在单个网页会话中。这意味着，如果关闭窗口，则会话数据将被删除。由于sessionStorage和localStorage具有相似的方法，因此我们仅关注localStorage。

HTML5 localStorage是Web存储API的一部分，该API用于在浏览器上存储没有到期数据的数据。即使关闭浏览器，数据也将在浏览器上可用。在浏览器会话之间保留着localStorage。这意味着当关闭并重​​新打开浏览器时，数据仍然可用，并且在选项卡和窗口之间也立即可用。

Web存储数据在不同的浏览器之间都不可用。例如，在Firefox中创建的存储对象无法像在cookie中一样在Internet Explorer中访问。有五种方法可用于本地存储： setItem(), getItem(), removeItem(), clear(), key()

Use case of Web Storages

Web存储的一些用例是：
-临时存储数据
-保存用户放置在购物车中的产品
-可以在页面请求，多个浏览器选项卡之间以及使用localStorage的浏览器会话之间提供数据
-localStorage可以完全离线使用
-将一些静态数据存储在客户端上以最大程度地减少后续请求的数量，Web存储可能会获得很大的性能提升。甚至可以使用Base64编码将图像存储在字符串中。
-可用于用户身份验证方法

对于上述示例，使用localStorage是有意义的。那么，您可能想知道我们什么时候应该使用sessionStorage。

在某些情况下，我们希望在关闭窗口后立即删除数据。如果我们不希望该应用程序干扰在另一个窗口中打开的同一应用程序。这些情况最好sessionStorage。

现在，让我们利用这些Web存储API的使用方式。
*/

/*
Web Storage objects:

- _localStorage_ - to display the localStorage object
- _localStorage.clear()_ - to remove everything in the local storage
- _localStorage.setItem()_ - to storage data in the localStorage. It takes a key and a value parameters.
- _localStorage.getItem()_ - to display data stored in the localStorage. It takes a key as a parameter.
- _localStorage.removeItem()_ - to remove stored item form a localStorage. It takes key as a parameter.
- _localStorage.key()_ - to display a data stored in a localStorage. It takes index as a parameter.
*/

/*
HTML5 Web存储对象

HTML Web存储提供了两个用于在客户端上存储数据的对象：

-window.localStorage-存储没有到期日期的数据
-window.sessionStorage-存储一个会话的数据（关闭浏览器选项卡时数据会丢失）大多数现代浏览器都支持Web Storage，但是最好检查浏览器是否支持localStorage和sessionStorage。让我们看看Web存储对象的可用方法。

Web存储对象：

- localStorage -显示localStorage对象
- localStorage.clear() -删除本地存储中的所有内容
- localStorage.setItem() -将数据存储在localStorage中。它需要一个键和一个值参数。
- localStorage.getItem() -显示存储在localStorage中的数据。它以键作为参数。
- localStorage.removeItem() -从localStorage删除存储的项目。它以key作为参数。
- localStorage.key() -显示存储在localStorage中的数据。它以index为参数。
*/

{
  console.log(localStorage);
  localStorage.setItem("firstname", "Jimmy");
  const firstName = localStorage.getItem("firstname");
  console.log(firstName);

  const users = { name: "jw", gender: "male" };
  localStorage.setItem("name", users.name);
  localStorage.setItem("gender", users.gender);
  console.log(localStorage);

  setTimeout(() => {
    localStorage.removeItem("name");  //移除单个存储
    console.log(localStorage);
  }, 5000);
}
{
  const user = {
    firstName: "Asabeneh",
    age: 250,
    skills: ["HTML", "CSS", "JS", "React"]
  };

  const userText = JSON.stringify(user, undefined, 4);
  localStorage.setItem("user", userText);

  const userJson = localStorage.getItem("user");
  let userObj = JSON.parse(userJson, undefined, 4);
  console.log(userObj);
}

{
  setTimeout(() => {
    localStorage.clear();      //清空存储
    console.log(localStorage);
  }, 10000);
}
