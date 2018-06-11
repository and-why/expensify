import React from 'react';
import { connect } from 'react-redux'; 
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpenseSummary = (props) => (
  <div>
    {
      (props.expenseCount > 1 || props.expenseCount === 0) ? 
      (
        <p>Viewing {props.expenseCount} expenses totalling {numeral(props.expensesTotal/100).format('$0,0.00')}</p>
      ) : (
        <p>Viewing 1 expense totalling {numeral(props.expensesTotal/100).format('$0,0.00')}</p>
      )
    } 
  </div>
);

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  }
}

export default connect(mapStateToProps)(ExpenseSummary);


