import moment from 'moment';

const expenses = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 350,
    createdAt: 0
  }, {
    id: '2',
    description: 'Hot Dog',
    note: '',
    amount: 4500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
  }, {
    id: '3',
    description: 'Not Hot Dog',
    note: '',
    amount: 700,
    createdAt: moment(0).add(4, 'days').valueOf()
  }
];

export default expenses;
