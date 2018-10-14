/**
 * 
 * Object Destructoring
 * 
 */


// const person = {
//     name: 'Ryan',
//     age: 22,
//     location: {
//         state: 'Colorado',
//         temp: 30
//     }
// }

// const {name = 'Anon', age} = person;
// console.log(`${name} is ${age}`);

// const {state, temp: stateTemperature} = person.location;
// if(state && stateTemperature){
//     console.log(`It's ${stateTemperature} in ${state}`);
// }

// const book = {
//     title: 'American Psycho',
//     author: 'Bret Easton Eliis',
//     publisher: {
//         name: 'Vintage Books'
//     }
// }

// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);


/**
 * 
 * Array Destructoring
 * 
 */

const address = ['12141 Bannock St', 'Denver', 'Colorado', '80234'];
//const address = [];

const [, city, state = "Utah"] = address;

console.log(`You are in ${city}, ${state}`);

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, , mediumCost] = item;
console.log(`A medium ${coffee} costs ${mediumCost}`);