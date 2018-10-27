import React from 'react';
import {shallow} from 'enzyme';

import {ExpenseList} from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

describe('components/ExpenseList', () => {

  test('should render ExpenseList with Expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render ExpenseList with empty message', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
  });

});
