import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpensesListFilters';
import ExpenseSummary from './ExpenseSummary';

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseSummary />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;