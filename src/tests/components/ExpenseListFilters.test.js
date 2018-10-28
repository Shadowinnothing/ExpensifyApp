import React from 'react';
import {shallow} from 'enzyme';

import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters, altFilters} from '../fixtures/filters';

describe('components/ExpenseListFilters', () => {

  let setTextFilterSpy, sortByDateSpy, sortByAmountSpy, setStartDateSpy, setEndDateSpy, wrapper;

  beforeEach(() => {
    setTextFilterSpy = jest.fn();
    sortByDateSpy = jest.fn();
    sortByAmountSpy = jest.fn();
    setStartDateSpy = jest.fn();
    setEndDateSpy = jest.fn();
    wrapper = shallow(
      <ExpenseListFilters
        filters={filters}
        setTextFilter={setTextFilterSpy}
        sortByDate={sortByDateSpy}
        sortByAmount={sortByAmountSpy}
        setStartDate={setStartDateSpy}
        setEndDate={setEndDateSpy}
      />
    );
  });

  test('should render ExpenseListFilters', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render ExpenseListFilters with alt data', () => {
    wrapper.setProps({
      filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
  });

});
