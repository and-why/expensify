import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";
import { firebase } from "../firebase/firebase";
import CustomModal from "../components/customModal";

let userImageURL = null;

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    return (userImageURL = user.photoURL);
  }
});

export class Header extends React.Component {
  state = {
    modalOpen: false
  };
  handleOpenModal = () => {
    this.setState({ modalOpen: true });
  };
  handleCloseModal = () => {
    this.setState({ modalOpen: false });
  };
  onLogout = () => {
    this.props.startLogout();
  };
  render() {
    return (
      <header className="header">
        <div className="content-container">
          <div className="header__content">
            <Link className="header__title" to="/dashboard">
              <h1>Expense Tracker</h1>
            </Link>
            <button
              className="header__profile btn btn--clear"
              onClick={this.handleOpenModal}
            >
              <div className="header__profile--photo">
                <img src={userImageURL} alt="" />
              </div>{" "}
              Logout
            </button>
            <CustomModal
              modalOpen={this.state.modalOpen}
              handleCloseModal={this.handleCloseModal}
              modalAction={this.onLogout}
            />
          </div>
        </div>
      </header>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Header);
