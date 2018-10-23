import moment from 'moment';

import {setTextFilter, sortByDate, sortByAmount,
  setStartDate, setEndDate} from '../../actions/filters';

describe('actions/filters.js', () => {

  test('should generate setTextFilter', () => {
    const text = 'rent';
    expect(setTextFilter(text)).toEqual({type: 'SET_TEXT_FILTER', text});
  });

  test('should generate default setTextFilter', () => {
    expect(setTextFilter()).toEqual({type: 'SET_TEXT_FILTER', text: ''});
  });

  test('should sort by the amount', () => {
    expect(sortByAmount()).toEqual({type: 'SORT_BY_AMOUNT'});
  });

  test('should sort by the date', () => {
    expect(sortByDate()).toEqual({type: 'SORT_BY_DATE'});
  });

  test('should generate setStartDate', () => {
    const startDate = moment(0);
    expect(setStartDate(startDate)).toEqual({type: 'SET_START_DATE', startDate});
  });

  test('should generate setEndDate', () => {
    const endDate = moment(12);
    expect(setEndDate(endDate)).toEqual({type: 'SET_END_DATE', endDate});
  });

});
