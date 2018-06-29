import React from "react";
import { connect } from "react-redux";
import { startLogin, startLoginFB } from "../actions/auth";

export const LoginPage = ({ startLogin, startLoginFB }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expense Tracker</h1>
      <p>Get your expenses in order ready for Tax Time.</p>
      <button className="btn" onClick={startLogin}>
        Login with Google
      </button>
      <button className="btn" onClick={startLoginFB}>
        Login with Facebook
      </button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin()),
  startLoginFB: () => dispatch(startLoginFB())
});
export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
