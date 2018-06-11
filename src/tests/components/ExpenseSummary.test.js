import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';

test('Should return ExpenseSummary with expense', () => {
  const wrapper = shallow(<ExpenseSummary expenses={expenses}/>)
  expect(wrapper).toMatchSnapshot();
});

test('Should return ExpenseSummary with 0 expense', () => {
  const wrapper = shallow(<ExpenseSummary/>)
  expect(wrapper).toMatchSnapshot();
});