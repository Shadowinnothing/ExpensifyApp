import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {startAddExpense,
  startSetExpenses,
  addExpense,
  editExpense,
  removeExpense,
  startRemoveExpense,
  setExpenses} from '../../actions/expenses';
import database from '../../firebase/firebase';
import expenses from '../fixtures/expenses';

describe('actions/expenses.js', () => {

  // have to provide thunk because that's what the actual store uses
  const createMockStore = configureMockStore([thunk]);

  beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({id, description, note, amount, createdAt}) => {
      expensesData[id] = {description, note, amount, createdAt};
    });
    database.ref('expenses')
      .set(expensesData)
      .then(() => done());
  });

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
        const actions = store.getActions(); // <- returns array of all actions
        expect(actions[0]).toEqual({
          type: 'ADD_EXPENSE',
          expense: {
            id: expect.any(String),
            ...expenseData
          }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
      }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
      })
  });

  test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({});
    const expenseDefaults = {
      description: '',
      amount: 0,
      note: '',
      createdAt: 0
    };
    store.dispatch(startAddExpense(expenseDefaults))
      .then(() => {
        const actions = store.getActions(); // <- returns array of all actions
        expect(actions[0]).toEqual({
          type: 'ADD_EXPENSE',
          expense: {
            id: expect.any(String),
            ...expenseDefaults
          }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
      }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
      })
  });

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

  test('should remove expense from firebase', (done) => {
    const store = createMockStore({});
    const id = expenses[2].id;
    store.dispatch(startRemoveExpense({id}))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
          type: 'REMOVE_EXPENSE',
          id
        });
        return database.ref(`expenses/${id}`).once('value');
      })
      .then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
      });

  });

  test('should setup set expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });
  });

  test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpenses())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
          type: 'SET_EXPENSES',
          expenses
        });
        done();
      });
  });

});
