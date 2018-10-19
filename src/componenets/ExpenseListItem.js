import React from 'react';

const ExpenseListItem = ({description, amount, createdAt}) => (
  <div>
    <h3>Description: {description}</h3>
    <p>${amount} - {createdAt}</p>
    <br />
  </div>
);

export default ExpenseListItem;
