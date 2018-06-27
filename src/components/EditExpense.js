import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";
import RemoveModal from "./RemoveModal";

export class EditExpense extends React.Component {
  state = {
    modalOpen: false
  };
  onSubmit = expense => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push("/");
  };
  onRemove = expense => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push("/");
  };

  handelOpenModal = () => {
    this.setState({ modalOpen: true });
  };
  handelCloseModal = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
          <button className="btn btn--red" onClick={this.handelOpenModal}>
            Remove Expense
          </button>
          <RemoveModal
            modalOpen={this.state.modalOpen}
            handelCloseModal={this.handelCloseModal}
            onRemove={this.onRemove}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id == props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: data => dispatch(startRemoveExpense(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpense);
