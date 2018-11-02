import * as firebase from 'firebase';
import config from './config';

firebase.initializeApp(config);

const database = firebase.database();

database.ref('expenses').push({
  description: 'percocet',
  note: 'represent',
  amount: 200,
  createdAt: 12
});

database.ref('expenses').push({
  description: 'molly',
  note: 'gatta represent',
  amount: 400,
  createdAt: 7
});

database.ref('expenses').push({
  description: 'fortnite',
  note: 'yeah idk',
  amount: 12,
  createdAt: 23
});

// database.ref('notes/-LQHk5bOvtG4ofp3R9zQ')
//   .remove();

// database.ref('notes').push({
//   title: 'drugs are bad',
//   body: 'ok'
// });
