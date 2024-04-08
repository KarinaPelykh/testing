//Context

// const user = {
//   tag: "mango",
//   showTag() {
//     console.log("showTag ->this", this);
//   },
// };
// user.showTag();

// const foo = function () {
//   console.log("this ", this);
// };

// const showTag = function () {
//   console.log("showTag ->this", this);
//   console.log("showTag ->this.tag", this.tag);
// };
// showTag();

// const user = {
//   tag: "mango",
// };

// // link on function showTag added in  user.showTagS
// user.showTagS = showTag;
// console.log(user);
// user.showTagS();

// const user = {
//   tag: "mandalorec",
//   showName() {
//     console.log("showName ->this", this);
//     console.log("showName ->this.tag", this.tag);
//   },
// };
// user.showName();

// const outerShowName = user.showName;
// outerShowName();

// const user = {
//   tag: "mandalorec",
//   showName() {
//     console.log("showName ->this", this);
//     console.log("showName ->this.tag", this.tag);
//   },
// };
// const invokeAction = function (action) {
//   console.log(action);
//   action();
// };
// invokeAction(user.showName);

// const unAdd = document.querySelector(".js-decrement");
// const add = document.querySelector(".js-increment");
// const valueSpan = document.querySelector(".js-value");

// const counter = {
//   value: 0,
//   increment() {
//     this.value += 1;
//   },
//   decrement() {
//     this.value -= 1;
//     if (this.value < 0) {
//       return (this.value = 0);
//     }
//   },
// };

// add.addEventListener("click", function () {
//   counter.increment();

//   valueSpan.textContent = counter.value;

//   console.log(counter);
// });
// unAdd.addEventListener("click", function () {
//   counter.decrement();
//   valueSpan.textContent = counter.value;
//   console.log(counter);
// });
