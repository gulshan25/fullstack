//Creating variables using var//

//var name = "Ryan";
//name = "John";
//alert(name);

// if (true) {
//     var name = "John";
//     //alert(name);
// }

// alert(name);

//Creating variables using var//

//Creating variables using const//

// const name = "Smith";
// alert(name);

//Creating variables using const//

//Creating variables using let//

// if (true) {
//     const name = "John";
//     //     name = "Smith";
//     alert(name);
// }

//Creating variables using let//

//Creating template strings//

// let fname = "John";
// let lname = "Smith";
// let age = prompt("Guess Ryan's age...");

//old way concet//
// let result = fname + ' ' + lname + ' is' + ' ' + age + ' years old';
// alert(result);

//using template strings
//this method can be using in API//

// let result = `${fname} ${lname} is ${age} years old`;
// alert(result);

//Creating template strings//

//Default parameters//

// function welcome(user, message) {
//     alert(`${user}, ${message}`);
// }
// welcome('Gulshan', 'Good Night');

//If don't given info

// function welcome(user, message) {
//     alert(`Hello ${user}, ${message}`);
// }
// welcome('ryan', 'Good morning');

// function welcome(user = "mystery person", message = "Good Day") {
//     alert(`Hello ${user}, ${message}`);
// }
// welcome();

//Default parameters//

//arrow functions//

// function greeting(message) {
//     return alert(`${message} everyone!`);
// }
// greeting("good day");

// function greeting(message = "good day") {
//     return alert(`${message} everyone!`);
// }
// greeting();

//ES6 method

// let greeting = message => alert(`${message} Everyone!`);
// greeting('hello');

// let greeting = (user, message) => alert(`Hello ${user}, ${message}`);
// greeting('ryan', 'Good night');

// let greeting = (user = 'mystery person', message = 'good day') => alert(`Hello ${user}, ${message}`);
// greeting();


//arrow functions//