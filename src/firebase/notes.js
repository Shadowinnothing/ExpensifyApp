/*
* Just some basic notes on how to use the firebase DB
* the notes go backwards, down at the bottom is more basic stuff
* were stuff at the top gets super hacker wizardy
*/

// fires when DB child is removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
// fires when DB child is changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
// // fires when child is added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// create array of returned firebase data
// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });
// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//       snapshot.forEach((childSnapshot) => {
//         expenses.push({
//           id: childSnapshot.key,
//           ...childSnapshot.val()
//         });
//       });
//       console.log(expenses);
//   });

// pushing objects
// database.ref('expenses').push({
//   description: 'rent',
//   note: '',
//   amount: 200,
//   createdAt: 12
// });
// database.ref('notes/-LQHk5bOvtG4ofp3R9zQ')
//   .remove();
// database.ref('notes').push({
//   title: 'drugs are bad',
//   body: 'ok'
// });


// Example of firebase 'arrays'
// const firebaseNotes = {
//   notes: {
//     asdfghjkl: {
//       title: 'RODGERS',
//       body: 'Go Pack Go'
//     },
//     lkjhgfdsa: {
//       title: 'Doncha know',
//       body: 'Go Pack Go'
//     }
//   };
// };
//
// const notes = [{
//   id: '12',
//   title: 'RODGERS',
//   body: 'Go Pack Go'
// }, {
//   id: '362era',
//   title: 'Doncha know',
//   body: 'Go Pack Go'
// }];
//
// database.ref('notes').set(firebaseNotes);

// // sets up a subscription to alert the client when the DB is changed
// // also prints a cute little template string
// const subscription = database.ref().on('value', (snapshot) => {
//   const user = snapshot.val();
//   console.log(`${user.name} is a ${user.job.title} at ${user.job.company}`);
// }, (err) => console.log(err));
// database.ref().on('value', subscription);

// on uses callback function
// callbacks can run constantly, promises return once
// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (err) => {
//   console.log('Error fetching data', err);
// });
//
// setTimeout(() => {
//   database.ref('age')
//   .set(24)
// }, 3500);
//
// setTimeout(() => {
//   database.ref().off('value', onValueChange);
// }, 7000);
//
// setTimeout(() => {
//   database.ref('age').set(26)
// }, 10500);

//
// get data from database
//
// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// ref() -> reference, Different parts of the database
// users, expenses, etc.
// database.ref()
//   .set({
//     name: 'Ryan',
//     age: 23,
//     stressLevel: 4,
//     job: {
//       title: 'Software Developer',
//       company: 'Google'
//     },
//     location: {
//       city: 'Denver',
//       country: 'United States'
//     }
//   })
//   .then(() => {
//     console.log('Data has been saved');
//   })
//   .catch((err) => {
//     console.log('Failure: ', err);
//   });
//
// database.ref()
//   .update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Boulder'
//   })
//   .then(() => console.log('worked'))
//   .catch((err) => console.log(err));

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
