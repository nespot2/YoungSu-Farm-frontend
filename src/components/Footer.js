import React from 'react';

function Footer(props) {
    return (
        <footer className="footer">
            <div className="footer-wrap">
                <ul className="footer-list">
                    <li className="footer-list-item"><a href="">이용약관</a></li>
                    <li className="footer-list-item"><a href="">개인정보 취급방침</a></li>
                    <li className="footer-list-item"><a href=""></a>ABOUT US</li>
                </ul>
                <ul className="footer-list">
                    <li className="footer-list-item">사업자 등록번호 : 375-87-00088</li>
                    <li className="footer-list-item">서울특별시 하하구 하하동 하하리</li>
                    <li className="footer-list-item">고객 문의 : nespot2@gmail.com</li>
                </ul>
                <div className="footer-list">
                    (주)용수네 농장 대표 : 김상재
                </div>
            </div>
        </footer>
    );
}

export default Footer;