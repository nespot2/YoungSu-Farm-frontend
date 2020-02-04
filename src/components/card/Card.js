import React from 'react';

function Card({imgUrl, title, explain, price}) {
    return (
        <div className="card">
            <a href="" className="card-link">
                <div className="card-photo">
                    <img className="card-img"
                         src={imgUrl}
                         alt=""/>
                </div>
                <div className="card-desc">
                    <div className="card-title">{title}</div>
                    <div className="card-explain">{explain}</div>
                    <div className="card-price">{price}</div>
                </div>
            </a>
        </div>
    );
}

export default Card;