import React, {Component} from 'react';
import {connect} from 'react-redux';

import ExpenseForm from './ExpenseForm';
import {startAddExpense} from '../actions/expenses';

export class AddExpensePage extends Component {
  onSubmit = (expense) => {
    //props.dispatch(addExpense(expense));
    this.props.startAddExpense(expense);
    this.props.history.push('/') // <- switch over to dashboard without full page reload
  };
  render(){
    return (
      <div>
          <div className="page-header">
            <div className="content-container">
              <h1 className="page-header__title">Add Expense</h1>
            </div>
          </div>

          <div className="content-container">
            <ExpenseForm
              onSubmit={this.onSubmit}
            />
          </div>

      </div>
    );
  };
};

// similar to mapStatesToProp but works with dispatch on the store
// returns an object props that make a call to dispatch
// does the same thing as the first commented line in AddExpensePage, but makes it easier to test
const mapDispatchToProps = (dispatch) => ({startAddExpense: (expense) => dispatch(startAddExpense(expense)) });

// mapStatesToProp is unedined
export default connect(undefined, mapDispatchToProps)(AddExpensePage);
