import {createStore} from 'redux';

// Action Generators = functions that return action Objects
// ooh yeah theres some nice object destructoring going on here boiiii
const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({setCountTo} = {}) => ({
    type: 'SET',
    setCountTo
});

const resetCount = () => ({
    type: 'RESET'
});

// similar to this.setState((prevState) => {});
const store = createStore((state = {count: 0}, action) => {

    switch(action.type){
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.setCountTo
            };
        default:
            return state;
    }
});

// gets called EVERY time the store gets called
store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 7}));
store.dispatch(incrementCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy: 420}));
store.dispatch(resetCount());
store.dispatch(setCount({setCountTo: 350}));

// unsibscribe from changes
//const unsubscribe = store.subscribe(() => {
//    console.log('unsubscribe');
//});