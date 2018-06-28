import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import selectExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expenses-total";
import numeral from "numeral";

export const ExpenseSummary = ({
  expenseCount,
  expensesTotal,
  expensesAll,
  expensesAllTotal
}) => {
  const expenseWord = count => (count === 1 ? "expense" : "expenses");
  const formattedExpenseTotal = total => numeral(total / 100).format("$0,0.00");

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{expenseCount}</span> {expenseWord(expenseCount)}{" "}
          totalling <span>{formattedExpenseTotal(expensesTotal)}</span>
        </h1>
        <p>
          There are are total of {expensesAll} {expenseWord(expensesAll)}{" "}
          recorded, totalling in {formattedExpenseTotal(expensesAllTotal)}
        </p>

        <div className="page-header__actions">
          <Link className="btn" to="/create">
            Add Expense
          </Link>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses),
    expensesAll: state.expenses.length,
    expensesAllTotal: selectExpensesTotal(state.expenses)
  };
};

export default connect(mapStateToProps)(ExpenseSummary);
