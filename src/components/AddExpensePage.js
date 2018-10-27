import React, {Component} from 'react';
import {connect} from 'react-redux';

import ExpenseForm from './ExpenseForm';
import {addExpense} from '../actions/expenses';

export class AddExpensePage extends Component {
  onSubmit = (expense) => {
    //props.dispatch(addExpense(expense));
    this.props.onSubmit(expense);
    this.props.history.push('/') // <- switch over to dashboard without full page reload
  };
  render(){
    return (
      <div>
          <h1>Add Expense</h1>
          <ExpenseForm
            onSubmit={this.onSubmit}
          />
      </div>
    );
  };
};

// similar to mapStatesToProp but works with dispatch on the store
// returns an object props that make a call to dispatch
// does the same thing as the first commented line in AddExpensePage, but makes it easier to test
const mapDispatchToProps = (dispatch) => ({onSubmit: (expense) => dispatch(addExpense(expense)) });

// mapStatesToProp is unedined
export default connect(undefined, mapDispatchToProps)(AddExpensePage);
