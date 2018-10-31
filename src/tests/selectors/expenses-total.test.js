import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

describe('components/expenseTotal', () => {

  test('should return 0 if no expenses given', () => {
    const sum = selectExpensesTotal( [] );
    expect(sum).toBe(0)
  });

  // remember, expenses is an array of objects!
  test('should return total of only 1 expense', () => {
    const amount = expenses[0].amount;
    const sum = selectExpensesTotal([expenses[0]]);
    expect(sum).toEqual(amount);
  });

  test('should add up multiple expenses', () => {
    const totalAmount = 5550; // <- total of amounts in fixtures/expenses.js
    const sum = selectExpensesTotal(expenses);
    expect(sum).toBe(totalAmount);
  });

});
