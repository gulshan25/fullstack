//Restructuring

// var name = "Everest";
// var height = "8848";
// var output = function() {
//     console.log(`Mt. ${this.name} is ${this.height} meter tall.`);
// }

// var adventureClimbing = { name, height, output };
// adventureClimbing.output();


//ES6//

// var adventureClimbing = {
//     name: "Everest",
//     height: "8848",
//     output: function() {
//         console.log(`Mt. ${this.name} is ${this.height} meter tall.`);
//     }
// };
// adventureClimbing.output();

var adventureClimbing = {
    name: "Everest",
    height: "8848",
    output() {
        console.log(`Mt. ${this.name} is ${this.height} meter tall.`);
    }
};
adventureClimbing.output();

//ES6//

//Restructuring

//Spread and rest operators

// var mountains = ['everest', 'FIsh tail', 'annapurna'];
// var mountainsFromJapan = ['Fuji'];

// var allMountains = [...mountains, ...mountainsFromJapan];
// console.log(allMountains);

// var day = {
//     breakfast: 'toast with milk',
//     lunch: 'rice with cicken curry'

// }

// var night = {
//     dinner: 'noodle soup'
// }

// var picnic = {...day, ...night };

// console.log(picnic);

// rest 

var rivers = ['sunkoshi', 'tamakoshi', 'saptakoshi'];
var [...first, ...rest] = rivers

console.log(rest);
//Spread and rest operators