import * as firebase from 'firebase';
import config from './config';

firebase.initializeApp(config);

const database = firebase.database();

// ref() -> reference, Different parts of the database
// users, expenses, etc.
database.ref()
  .set({
    name: 'Ryan',
    age: 23,
    stressLevel: 4,
    job: {
      title: 'Software Developer',
      company: 'Google'
    },
    location: {
      city: 'Denver',
      country: 'United States'
    }
  })
  .then(() => {
    console.log('Data has been saved');
  })
  .catch((err) => {
    console.log('Failure: ', err);
  });

database.ref()
  .update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Boulder'
  })
  .then(() => console.log('worked'))
  .catch((err) => console.log(err));

// database.ref()
//   .update({
//     name: 'Gel',
//     age: 20,
//     job: 'Office Manager',
//     isSingle: null
//   })
//   .then(() => {
//     console.log('works');
//   })
//   .catch((err) => {
//     console.log('doesnt work');
//   });

//
// both of these examples remove data
//
// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('successfully removed the data');
//   })
//   .catch((err) => {
//     console.log('Failure: ', err);
//   });
// database.ref('isSingle').set(null);

//
// just a few examples for manipulating data
//
// database.ref('age').set(24);
// database.ref('location/city').set('Green Bay');
// database.ref('attributes').set({
//   height: 70,
//   weight: 180
// }).then(() => {
//   console.log('second set call worked yo');
// }).catch((err) => {
//   console.log('ERROR ERROR', err)
// });
