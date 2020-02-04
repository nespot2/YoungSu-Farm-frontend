import React from 'react';
import BestCardList from "./card/BestCardList";


function Main(props) {
    return (
        <main className="main">
            <div className="main-content">
                <h1>거창의 최고의 자랑! 용수네 농장</h1>
            </div>
            <BestCardList/>
        </main>
    );
}

export default Main;
