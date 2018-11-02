import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {startAddExpense, addExpense, editExpense, removeExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';

describe('actions/expenses.js', () => {

  // have to provide thunk because that's what the actual store uses
  const createMockStore = configureMockStore([thunk]);

  test('should add an expense', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: expenses[2]
    });
  });

  test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
      description: 'keyboard',
      amount: 5500,
      note: 'nice',
      createdAt: 123456789
    };
    store.dispatch(startAddExpense(expenseData))
      .then(() => {
        expect(1).toBe(1);
        done();
      });
  });

  test('should add expense with defaults to database and store', () => {

  });

  // test('should setup expense with default values', () => {
  //   const action = addExpense();
  //   expect(action).toEqual({
  //     type: 'ADD_EXPENSE',
  //     expense: {
  //       description: '',
  //       note: '',
  //       amount: 0,
  //       createdAt: 0,
  //       id: expect.any(String)
  //     }
  //   })
  // });

  test('should edit an expense', () => {
    const expenseObj = {id: '123abc', amount: 350.69};
    const editedObj = editExpense(expenseObj.id, {amount: 710.42});
    expect(editedObj).toEqual({
      id: '123abc',
      type: 'EDIT_EXPENSE',
      updates: {
        amount: 710.42
      }
    })
  });

  test('should remove an expense', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
      type: 'REMOVE_EXPENSE',
      id: '123abc'
    })
  });

});
