import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should set default values', () => {
  const state = expensesReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual([])
});


test('Should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([
    expenses[0],
    expenses[2]
  ])
});

test('Should NOT remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '1234'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: '4',
    description: 'Finger',
    note: 'middle',
    amount: 200,
    createdAt: 100
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
  const description = 'My Rent'
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      description
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].description).toBe(description)
});

test('should NOT edit an expense', () => {
  const description = 'My Rent'
  const action = {
    type: 'EDIT_EXPENSE',
    id: 123,
    updates: {
      description
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses)
});