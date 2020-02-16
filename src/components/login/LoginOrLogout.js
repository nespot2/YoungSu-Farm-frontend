import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {connect} from "react-redux";


function LoginOrLogout(props) {

    const {isSignIn} = props;

    return isSignIn ? logout() : login();
}

function login() {
    return el("sign-in-alt", "로그인")

}

function logout() {
    return el("sign-out-alt", "로그아웃")
}

function el(icon, message) {
    return (
        <ul className="header-ul">
            <li><FontAwesomeIcon icon={icon} size="2x"/></li>
            <li><span>{message}</span></li>
        </ul>
    )

}

const mapStateToProps = (state) => {
    return {
        isSignIn: state.auth.isSignIn
    };
}

export default connect(mapStateToProps, {})(LoginOrLogout);