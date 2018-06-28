import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";
import CustomModal from "./customModal";

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
  handelGoBack = () => {
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
          <div className="btn-wrapper">
            <button
              className="btn btn--red btn--fw"
              onClick={this.handelOpenModal}
            >
              Remove Expense
            </button>
            {/* <button className="btn btn--fw" onClick={this.handelGoBack}>Back</button> */}
          </div>

          <CustomModal
            modalOpen={this.state.modalOpen}
            handelCloseModal={this.handelCloseModal}
            modalAction={this.onRemove}
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
