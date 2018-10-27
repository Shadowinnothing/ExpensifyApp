import React from 'react';
import {shallow} from 'enzyme';

import {EditExpensePage} from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

describe('components/EditExpensePage', () => {

  let wrapper, editExpenseSpy, removeExpenseSpy, historySpy;

  beforeEach(() => {
    editExpenseSpy = jest.fn();
    removeExpenseSpy = jest.fn();
    historySpy = {push: jest.fn()}
    wrapper = shallow(<EditExpensePage
      expense={expenses[0]}
      editExpense={editExpenseSpy}
      removeExpense={removeExpenseSpy}
      history={historySpy}
    />);

  });

  test('should correctly render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
  })

  test('should handle editExpenseSpy', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(editExpenseSpy).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
  });

  test('should handle removeExpenseSpy', () => {
    wrapper.find('button').simulate('click');
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(removeExpenseSpy).toHaveBeenLastCalledWith({id: expenses[0].id});
  });

});
