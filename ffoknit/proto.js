// // function Person(fName, lName) {
// //   this.fName = fName;
// //   this.lName = lName;

// //   console.log("Person has been created");
// // }

// // Person.prototype.fullName = () => {
// //   return `${this.fName} ${this.lName}`;
// // };

// // function Employee(fName, lName, role) {
// //   Person.call(this, fName, lName);
// //   this.role = role;
// // }

// // Employee.prototype = Object.create(Person.prototype);

// // Employee.prototype.fullName = () => {
// //   return `${Person.prototype.fullName.call(this)} (${this.role})`;
// // };

// // const person = new Person("Matthew", "Hook");
// // person.fullName();

// // const employee = new Employee("Matthew", "Hook", "Frontend dev");
// // employee.fullName();

// // Object.create = (linkToProto) => ({
// //   __proto__: linkToProto,
// // });

// // Promise.resolve(3).finally(() => {});

// getPromise1()
//   .then(() => getPromise2())
//   .then(finalHandler);

// // getPromise2()
// //   .then(() => getPromise2())
// //   .then(finalHandler);

// // getPromise1().then(getPromise2()).then(finalHandler);

// // getPromise1().then(getPromise2).then(finalHandler)

// Promise.reject("a")
//   .catch((p) => p + "b")
//   .catch((p) => p + "c")
//   .then((p) => p + "d")
//   .finally((p) => p + "e")
//   .then((p) => console.log(p));
// console.log("f");


console.log(1)
setTimeout(() => console.log(2))
Promise.resolve(3).then(console.log)
console.log(4)
setTimeout(() => console.log(5))
console.log(6)
