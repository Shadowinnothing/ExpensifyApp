import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

describe('reducers/expenses.js', () => {

  test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
  });

  test('should add an expense', () => {
    const action = {
      type: 'ADD_EXPENSE',
      expense: {
        id: '4',
        description: 'brett favre',
        note: 'go pack',
        amount: 750,
        createdAt: 0
      }
    };
    const state = expensesReducer(expenses, action);
    expect(state.length).toEqual(4);
  });

  test('should remove an expense by id', () => {
    const action = {
      type: 'REMOVE_EXPENSE',
      id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[0], expenses[2]]);
  });

  test('should not remove expenses with invalid id', () => {
    const action = {
      type: 'REMOVE_EXPENSE',
      id: '-1'
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
  });

  test('should edit an expense', () => {
    const description = 'Chun Li';
    const action = {
      type: 'EDIT_EXPENSE',
      id: '2',
      updates: {
        description
      }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].description).toEqual(description);
  });

  test('should not edit an expense with invalid id', () => {
    const action = {
      type: 'EDIT_EXPENSE',
      id: '-1',
      updates: {
        description: 'this aint ganna work dawg'
      }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
  });

});
