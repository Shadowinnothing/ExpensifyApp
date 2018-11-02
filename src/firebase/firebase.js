import * as firebase from 'firebase';
import config from './config';

firebase.initializeApp(config);

const database = firebase.database();

// ref() -> reference, Different parts of the database
// users, expenses, etc.
database.ref().set({
  name: 'Ryan',
  age: 23,
  isSingle: false,
  location: {
    city: 'Denver',
    country: 'United States'
  }
}).then(() => {
  console.log('Data has been saved');
}).catch((err) => {
  console.log('Failure: ', err);
});

// database.ref('age').set(24);
// database.ref('location/city').set('Green Bay');
database.ref('attributes').set({
  height: 70,
  weight: 180
}).then(() => {
  console.log('second set call worked yo');
}).catch((err) => {
  console.log('ERROR ERROR', err)
});
