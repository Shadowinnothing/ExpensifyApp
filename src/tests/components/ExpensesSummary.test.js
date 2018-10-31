import React from 'react';
import {shallow} from 'enzyme';

import {ExpensesSummary} from '../../components/ExpensesSummary';

describe('component/ExpensesSummary', () => {

  test('should correctly render one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={350} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should correctly render multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={12} expensesTotal={350758914375023498} />);
    expect(wrapper).toMatchSnapshot();
  });

});
