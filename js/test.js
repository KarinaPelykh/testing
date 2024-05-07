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
// const objC = {
//   z: 5,
// };
// console.log(objC);
// const objB = Object.create(objC);

// // console.log(objB);
// objB.c = 1;
// console.log(objB);
// const objA = Object.create(objB);
// objA.t = 7;
// console.log(objA);

// const Car = function (value) {
//   this.c = value;
//   console.log(this);
// };
// Car.prototype.hi = 8;
// console.log(Car.prototype);
// const myCar = new Car(5);
// console.log(myCar.hi);

// const User = function ({ email, password } = {}) {
//   this.email = email;
// };

// const user1 = new User({ email: "karina@gmail.com", password: 111111 });
// console.log(user1);

// const User = function (value) {
//   console.log("function constructor", this.__proto__);
//   this.value = value;
// };

// const User1 = new User(152);
// console.log("User1", User1);
// const User2 = new User(12);
// console.log("User2", User2);

// class Car1 {}

// const instance = new Car1();

// const word = "JavaScript";

// const lattes = word.split("");
// let safe = "";
// for (const latter of lattes) {
//   console.log(latter);

//   if (latter === latter.toLowerCase()) {
//     console.log("latter -", latter);
//     safe += latter.toUpperCase();
//   } else {
//     safe += latter.toUpperCase();
//   }
// }
// console.log(safe);

// function countBy(x, n) {
//   let z = [];

//   if (x % 2 !== 0) {
//     for (let index = 1; index <= n; index++) {
//       z.push(index * x);
//     }
//   } else {
//     for (let index = 1; index <= n; index++) {
//       z.push(index * x);
//     }
//   }
//   return z;
// }

// console.log(countBy(2, 5));
// console.log(countBy(3, 7));
// console.log(countBy(4, 10));
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const button = document.querySelector(".button");
// const span = document.querySelector(".color");
// const body = document.querySelector("body");
// button.addEventListener("click", () => {
//   const color = getRandomHexColor();
//   span.textContent = color;
//   body.style.backgroundColor = color;
// });
// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// const list = document.querySelector(".ingredients");

// ingredients.map((item) => {
//   const li = document.createElement("li");
//   li.textContent = item;
//   li.classList.add("item");
//   list.append(li);
// });

// const button = document.querySelector('#counter [data-action="decrement"]');
// const buttonIN = document.querySelector('#counter [data-action="increment"]');
// const value = document.querySelector("#value");
// let count = 0;

// const handeldecremnt = () => {
//   value.textContent = count -= 1;
// };
// const handelindecremnt = () => {
//   value.textContent = count += 1;
// };
// buttonIN.addEventListener("click", handelindecremnt);
// button.addEventListener("click", handeldecremnt);

// const input = document.querySelector("#font-size-control");
// const span = document.querySelector("#text");

// input.addEventListener("input", (e) => {
//   const size = e.currentTarget.value;
//   span.style.fontSize = `${size}px`;
// // });

// const input = document.querySelector("#controls input");
// const box = document.querySelector("#boxes");

// const deletes = document.querySelector("[data-destroy]");
// const create = document.querySelector("[data-create]");

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// const ar = [];
// let size = 30;

// const createBoxes = (e) => {
//   const value = input.value;

//   for (let i = 0; i < value; i++) {
//     const div = document.createElement("div");
//     div.style.width = size + `px`;
//     div.style.height = size + `px`;
//     div.style.backgroundColor = getRandomHexColor();
//     ar.push(div);
//     box.prepend(...ar);
//     size += 10;
//   }
// };

// create.addEventListener(
//   "click",

//   createBoxes
// );
// deletes.addEventListener("click", (e) => {
//   e.preventDefault();
//   box.textContent = "";
// });

// const clients = ["Mango", "Poly", "Ajax"];
// for (const client of clients) {
//   if (client === "Poly") {
//     const num = clients.indexOf("Poly");
//     clients[num] = "karina";
//     console.log(clients);
//   }
// }
