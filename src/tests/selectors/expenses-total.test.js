import selectExpenseTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';


test('Should return 0 if no expenses', () => {
  const expenses = [];
  const result = selectExpenseTotal(expenses);
  expect(result).toBe(0);
});

test('Should return single expense', () => {
  const result = selectExpenseTotal([expenses[0]]);
  expect(result).toBe(195);
});


test('Should sum amount of all expenses', () => {
  const result = selectExpenseTotal(expenses)
  expect(result).toBe(175495);
});