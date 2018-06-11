import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';

test('Should return ExpenseSummary with expense', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={222}/>)
  expect(wrapper).toMatchSnapshot();
});

test('Should return ExpenseSummary with 0 expense', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={12} expensesTotal={22234222}/>)
  expect(wrapper).toMatchSnapshot();
});