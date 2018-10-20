import {addExpense, editExpense, removeExpense} from '../../actions/expenses';
describe('actions/expenses.js', () => {
  
  test('should add an expense', () => {
    const expenseData = {
      description: 'Rent',
      amount: 350,
      createdAt: 12,
      note: 'Last months rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        ...expenseData,
        id: expect.any(String)
      }
    });
  });

  test('should setup expense with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0,
        id: expect.any(String)
      }
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

});
