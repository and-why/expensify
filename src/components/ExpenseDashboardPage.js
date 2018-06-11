import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpensesListFilters';
import ExpenseSummary from './ExpenseSummary';

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseSummary />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;