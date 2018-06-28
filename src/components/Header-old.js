import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import { firebase } from "../firebase/firebase";
    
let userImageURL = null;
    
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        return userImageURL = user.photoURL;
    } 
});

export const Header = ({ startLogout }) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/dashboard">
                    <h1>Expensify</h1>
								</Link>
									<button className="header__profile btn btn--clear" onClick={startLogout}><div className="header__profile--photo"><img src={userImageURL} alt=""/></div> Logout</button>
            </div>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout()),
});




export default connect(undefined, mapDispatchToProps)(Header);