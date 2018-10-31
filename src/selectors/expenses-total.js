// returns total amounts for a given array of expenses
export default (expenses) => {
  return expenses
    .map((exp) => exp.amount)
    .reduce((total, amount) => total + amount, 0);
};
