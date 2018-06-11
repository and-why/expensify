import expenses from './expenses';

export default (expenses) => {
  return expenses
    .map(e => e.amount)
    .reduce((acc, cur) => acc + cur, 0);
}