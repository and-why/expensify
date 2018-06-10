import { createStore } from 'redux';

// const add = ({ a, b }, c) => {
// 	return a + b + c
// }

// console.log(add({a: 1, b: 12}, 100));

// const incrementCount = (payload = {}) => ({
// 	type: 'INCREMENT',
// 	incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// });
	// above becomes below by destructuring 

const incrementCount = ({ incrementBy = 1 } = {}) => ({
	type: 'INCREMENT',
	incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
	type: 'DECREMENT',
	decrementBy
});

const resetCount = () => ({
	type: 'RESET'
});

const setCount = ({ count } = {}) => ({
	type: 'SET',
	count
});

// Reducers
// 1. Reducers are pure functions - doesnt use anything from outside of function or create anything. Only uses arguments within function
// 2. Never change state or action - don't mutate or reassign - use them to read off to return a new state.

const countReducer = (state = { count: 0 }, action) => {
	switch (action.type) {
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
		case 'RESET': 
			return {
				count: 0
			};
		case 'SET':
			return {
				count: action.count
			}
			default: 
				return state;
	}
};


const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});



// store.dispatch({
// 	type: 'INCREMENT',
// 	incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 200 }));
