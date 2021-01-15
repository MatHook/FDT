"use strict";
// const name = 'Mat'

// function fn1() {
//   const fn = () => console.log(`hi , ${this.name}`)

//   fn()
// }

// const fn = () => console.log(`hi, ${this.name}`)

// const obj = {
//   name: 'Nick',
//   sayHi: fn,
// }

// obj.sayHi()

// var userService = {
//   currentFilter: "active",
//   users: [
//     { name: "Al", status: "active" },
//     { name: "Bel", status: "offline" },
//   ],
//   getFilteredUsers: function () {
//     return this.users.filter(function (user) {
//       return user.status === this.currentFilter;
//     }, this);
//   },
// };

// console.log(userService.getFilteredUsers())

// const obj = {
//   prop: 1,
//   a: function () {
//     console.log(this.prop);
//   },
// };

// obj.a.prop = 2;
// obj.a();

// var fn = obj.a;
// fn();

// const isStrictMode = () => {
//   function checkThis() {
//     return this;
//   }

//   return checkThis() === undefined
// };

// function plus(a, b, c, d) {
//   return a + b + c + d;
// }


// function curry(fn) {
//   const argsLength = fn.length;

//   return function innerFn(...newArgs) {
//     if (newArgs.length >= argsLength) {
//       return fn(...newArgs);
//     }

//     return innerFn.bind(undefined, ...newArgs);
//   };
// }

// const curryPlus = curry(plus)

// const plusFive = curryPlus(5)
// console.log(plusFive(4, 3, 5))
// console.log(plusFive(10, 1)(3))