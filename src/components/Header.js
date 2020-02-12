import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Header(props) {
    return (
        <header className="header header-box-shadow">
            <div className="header-wrap">
                <div className="header-item">
                    <FontAwesomeIcon icon="bars" size="2x"/>
                </div>
                <div className="header-item">
                    <span className="header-title">용 수 농 장</span>
                    <FontAwesomeIcon icon="seedling" color="#3A5F0B"/>
                </div>
                <div className="header-item">
                    <div type="text" className="header-input">
                        <input type="text"/>
                        <FontAwesomeIcon icon="search"/>
                    </div>
                </div>
                <div className="header-item">
                    <ul className="header-ul">
                        <li><FontAwesomeIcon icon="sign-in-alt" size="2x"/></li>
                        <li><span>로그인</span></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;