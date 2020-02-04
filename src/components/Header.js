import React from 'react';

function Header(props) {
    return (
        <header className="header header-box-shadow">
            <div className="header-wrap">
                <div>버튼목록</div>
                <div>용수 농장</div>
                <div>
                    <input text=""/>
                    <button>ok</button>
                </div>
                <div>로그인정보</div>
            </div>
        </header>
    );
}

export default Header;