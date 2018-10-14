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

const book = {
    title: 'American Psycho',
    author: 'Bret Easton Eliis',
    publisher: {
        name: 'Vintage Books'
    }
}

const {name: publisherName = 'Self-Published'} = book.publisher;
console.log(publisherName);