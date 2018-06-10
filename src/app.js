//import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense} from './actions/expenses';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters';
import expensesReducer from './reducers/expenses';
import filtersReducer from './reducers/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import AppRouter from './routers/AppRouter';


const store = configureStore();

store.dispatch(addExpense({description: 'Water Bill', amount: 7600}));
store.dispatch(addExpense({description: 'Gas Bill', createdAt: 5400}));
store.dispatch(addExpense({description: 'Rent', amount: 109500}));




store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses)
});

const jsx = (
  <Provider store={store}> 
    <AppRouter />
  </Provider>
)




ReactDOM.render(jsx, document.getElementById('app'));