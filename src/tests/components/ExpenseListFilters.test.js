import React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment';

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

  test('should handle text change', () => {
    const value = 'rent';
    wrapper.find('input').simulate('change', {
      target: {value}
    });
    expect(setTextFilterSpy).toHaveBeenLastCalledWith(value);
  });

  test('should sort by date', () => {
    const value = 'date';
    // by default, the tests already sort by date
    // this call to setProps changes it to sort by amount
    // to double check sort by date can be sorted to
    wrapper.setProps({
      filters: altFilters
    });
    wrapper.find('select').simulate('change', {
      target: {value}
    });
    expect(sortByDateSpy).toHaveBeenCalled();
  });

  test('should sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
      target: {value}
    });
    expect(sortByAmountSpy).toHaveBeenCalled();
  });

  test('should handle date changes', () => {
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(8, 'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate});
    expect(setStartDateSpy).toHaveBeenLastCalledWith(startDate);
    expect(setEndDateSpy).toHaveBeenLastCalledWith(endDate);
  });

  test('should handle date focus changes', () => {
    const calanderFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calanderFocused);
    expect(wrapper.state('calanderFocused')).toBe(calanderFocused);
  });

});
