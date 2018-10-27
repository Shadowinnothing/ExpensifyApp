import React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment';

import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

describe('components/ExpenseForm', () => {

  test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render ExpenseForm with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[2]} />);
    expect(wrapper).toMatchSnapshot();
  });

  // includes multiple snapshot instances to make sure the component works
  // before and after it is rendered
  test('should render error for invalid ExpenseForm submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {} // <- removes error 'TypeError: Cannot read property 'preventDefault' of undefined'
    });
    expect(wrapper.state('error')).toEqual('Please Provide a Description and Amount');
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
  });

  test('should set description on input change', () => {
    const value = 'New Description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
      target: {value}
    });
    expect(wrapper.state('description')).toBe(value);
  });

  test('should set note on textarea change', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = 'Hello Parking Meter';
    wrapper.find('textarea').simulate('change', {
      persist: () => {},
      target: {value}
    });
    expect(wrapper.state('note')).toEqual(value);
  });

  test('should set amount if valid input', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = '350.69';
    wrapper.find('input').at(1).simulate('change', {
      target: {value}
    });
    expect(wrapper.state('amount')).toEqual(value);
  });

  test('should not set amount if invalid input', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = '350.420';
    wrapper.find('input').at(1).simulate('change', {
      target: {value}
    });
    expect(wrapper.state('amount')).toEqual('');
  });

  // first test using spies
  test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn(); // <- returns new spy
    const wrapper = shallow(<ExpenseForm
      expense={expenses[1]}
      onSubmit={onSubmitSpy}
    />);
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
      description: expenses[1].description,
      amount: expenses[1].amount,
      note: expenses[1].note,
      createdAt: expenses[1].createdAt
    });
  });

  test('should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
  });

  test('should set calanderFocused on change', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
    expect(wrapper.state('calanderFocused')).toEqual(focused);
  });

});
