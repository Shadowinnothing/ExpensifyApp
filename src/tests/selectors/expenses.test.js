import moment from 'moment';

import selectExpenses from '../../selectors/expenses';

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

describe('expenses selector', () => {

  test('should filter by text value', () => {
    const filters = {
      text: 'o',
      sortBy: 'date',
      startDate: undefined,
      endDate: undefined
    };
    const res = selectExpenses(expenses, filters);
    expect(res).toEqual([expenses[2], expenses[1]]);
  });

  test('should filter by startDate', () => {
    const filters = {
      text: '',
      sortBy: 'date',
      startDate: moment(0),
      endDate: undefined
    };
    const res = selectExpenses(expenses, filters);
    expect(res).toEqual([expenses[2], expenses[0]]);
  });

  test('should filter by endDate', () => {
    const filters = {
      text: '',
      sortBy: 'date',
      startDate: undefined,
      endDate: moment(0).add(2, 'days')
    };
    const res = selectExpenses(expenses, filters);
    expect(res).toEqual([expenses[0], expenses[1]]);
  });

  test('should sort by date', () => {
    const filters = {
      text: '',
      sortBy: 'date',
      startDate: undefined,
      endDate: undefined
    };
    const res = selectExpenses(expenses, filters);
    expect(res).toEqual([expenses[2], expenses[0], expenses[1]]);
  });

  test('should sort by amount', () => {
    const filters = {
      text: '',
      sortBy: 'amount',
      startDate: undefined,
      endDate: undefined
    };
    const res = selectExpenses(expenses, filters);
    expect(res).toEqual([expenses[1], expenses[2], expenses[0]]);
  });

});
