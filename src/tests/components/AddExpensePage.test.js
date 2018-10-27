import React from 'react';
import {shallow} from 'enzyme';

import {AddExpensePage} from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

describe('components/AddExpensePage', () => {

  let addExpenseSpy, historySpy, wrapper;

  beforeEach(() => {
    addExpenseSpy = jest.fn();
    historySpy = {push: jest.fn()};
    wrapper = shallow(<AddExpensePage
      addExpense={addExpenseSpy}
      history={historySpy}
    />);
  });

  test('should render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should handle onSubmitSpy', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(addExpenseSpy).toHaveBeenLastCalledWith(expenses[0]);
  });

});
