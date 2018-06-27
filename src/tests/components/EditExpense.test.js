import React from "react";
import { shallow } from "enzyme";
import { EditExpense } from "../../components/EditExpense";
import expenses from "../fixtures/expenses";
import Modal from "react-modal";

let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpense
      startEditExpense={startEditExpense}
      startRemoveExpense={startRemoveExpense}
      history={history}
      expense={expenses[2]}
    />
  );
});

test("should render EditExpense correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("Should handle startEditExpense", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(startEditExpense).toHaveBeenLastCalledWith(
    expenses[2].id,
    expenses[2]
  );
});

test("Should open modal when remove expense is clicked", () => {
  wrapper.find("button").simulate("click");
  expect(wrapper.find(RemoveModal).prop("isOpen")).toEqual(true);
});

test("Should open modal when remove expense is clicked", () => {
  wrapper
    .find("button")
    .at(1)
    .simulate("click");
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(startRemoveExpense).toHaveBeenLastCalledWith({
    id: expenses[2].id
  });
});
