import {createStore} from 'redux';

// similar to this.setState((prevState) => {});
const store = createStore((state = {count: 0}, action) => {

    switch(action.type){
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            };
        case 'RESET':
            return {
                count: state.count = 0
            };
        case 'SET':
            return {
                count: action.set
            };
        default:
            return state;
    }
});

// gets called EVERY time the store gets called
store.subscribe(() => {
    console.log(store.getState());
});

// unsibscribe from changes
// NOTICE: will not work with this example because
// I have placed the dispatch calls in their own functions
//const unsubscribe = store.subscribe(() => {
//    console.log('unsubscribe');
//});

const incrementCount = (x) => {
    // dispatch sends off action to state
    store.dispatch({
        type: 'INCREMENT',
        incrementBy: x
    });
};

const decrementCount = (x) => {
    store.dispatch({
        type: 'DECREMENT',
        decrementBy: x
    });
};

const resetCount = () => {
    store.dispatch({
        type: 'RESET'
    });
};

const setCount = (x) => {
    store.dispatch({
        type: 'SET',
        set: x
    })
}

incrementCount();
incrementCount(5);
decrementCount(10);
resetCount();
setCount(69);