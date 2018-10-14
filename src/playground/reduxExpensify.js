import {createStore, combineReducers} from 'redux';

const demoState = {
    expenses: [{
        id: 'lkjhgfdsa',
        description: 'October Rent',
        note: 'Final payment for address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};