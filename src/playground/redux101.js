import {createStore} from 'redux';

// similar to this.setState((prevState) => {});
const store = createStore((state = {count: 0}, action) => {

    switch(action.type){
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        case 'RESET':
            return {
                count: state.count = 0
            };
        default:
            return state;
    }
});

const incrementCount = () => {
    // dispatch sends off action to state
    store.dispatch({
        type: 'INCREMENT'
    });
};

const decrementCount = () => {
    store.dispatch({
        type: 'DECREMENT'
    });
};

const resetCount = () => {
    store.dispatch({
        type: 'RESET'
    });
};

console.log(store.getState());