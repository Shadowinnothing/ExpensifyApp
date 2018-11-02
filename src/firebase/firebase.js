import * as firebase from 'firebase';
import config from './config';

firebase.initializeApp(config);

const database = firebase.database();

// sets up a subscription to alert the client when the DB is changed
// also prints a cute little template string
const subscription = database.ref().on('value', (snapshot) => {
  const user = snapshot.val();
  console.log(`${user.name} is a ${user.job.title} at ${user.job.company}`);
}, (err) => console.log(err));
database.ref().on('value', subscription);
