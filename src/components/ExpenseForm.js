import React, {Component} from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';

import 'react-dates/lib/css/_datepicker.css'; // <- makes react-dates look sexy as hell

export default class ExpenseForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '', // <- divide by 100 to convert pennies to number with a decimal
      createdAt: props.expense ? moment(props.expense.createdAt): moment(),
      calanderFocused: false,
      error: ''
    }
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({description}));
  };

  onNoteChange = (e) => {
    //const note = e.target.value;
    e.persist();
    this.setState(() => ({note: e.target.value}));
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
      this.setState(() => ({amount}));
    }
  };

  onDateChange = (createdAt) => {
    if(createdAt){
      this.setState(() => ({createdAt}));
    }
  };

  onFocusChange = ({focused}) => {
    this.setState(() => ({calanderFocused: focused}));
  };

  onSubmit = (e) => {
    e.preventDefault(); // <- prevents full page refresh
    // error handler
    if(!this.state.description || !this.state.amount){
      this.setState(() => ({error: 'Please Provide a Description and Amount'}));
    } else {
      this.setState(() => ({error: ''}));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100, // <- multiply by 100 because app works in cents
        createdAt: this.state.createdAt.valueOf(), // <- valueof() is from moment documentation, makes date a UNIX timestamp
        note: this.state.note
      });
    }
  };

  render(){
    return (
      <div>

        {this.state.error && <p><b>{this.state.error}</b></p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />

          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />

          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calanderFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={(day) => false}
          />

          <textarea
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          ></textarea>

        <button>Add Expense</button>
        </form>

      </div>
    );
  };
}
