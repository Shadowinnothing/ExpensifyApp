import {createStore} from 'redux';

// similar to this.setState((prevState) => {});
const store = createStore((state = {count: 0}) => {
    
    return state;
});

console.log(store.getState());