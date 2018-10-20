import _ from 'lodash';
import moment from 'moment';

// Get Visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    //const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    //const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const createdAtMoment = moment(expense.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day'): true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day'): true;
    const textMatch = _.toLower(expense.description).includes(_.toLower(text));

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
      if(sortBy === 'date'){
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if(sortBy === 'amount'){
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

export default getVisibleExpenses;
