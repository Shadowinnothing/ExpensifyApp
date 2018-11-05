import React from 'react';
import {shallow} from 'enzyme';

import {EditExpensePage} from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

describe('components/EditExpensePage', () => {

  let wrapper, startEditExpenseSpy, startRemoveExpenseSpy, historySpy;

  beforeEach(() => {
    startEditExpenseSpy = jest.fn();
    startRemoveExpenseSpy = jest.fn();
    historySpy = {push: jest.fn()}
    wrapper = shallow(<EditExpensePage
      expense={expenses[0]}
      startEditExpense={startEditExpenseSpy}
      startRemoveExpense={startRemoveExpenseSpy}
      history={historySpy}
    />);

  });

  test('should correctly render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
  })

  test('should handle startEditExpenseSpy', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpenseSpy).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
  });

  test('should handle startRemoveExpenseSpy', () => {
    wrapper.find('button').simulate('click');
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpenseSpy).toHaveBeenLastCalledWith({id: expenses[0].id});
  });

});
