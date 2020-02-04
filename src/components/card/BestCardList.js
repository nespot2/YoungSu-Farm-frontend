import React from 'react';
import {go, map} from 'fxjs';

import Card from './Card';


const arr = [
    {
        id : 1,
        imgUrl: "",
        title: "안녕하슈",
        explain: "죄송합니다.",
        price: 5000
    },
    {
        id : 2,
        imgUrl: "",
        title: "안녕하슈",
        explain: "죄송합니다.",
        price: 5000
    },
    {
        id : 3,
        imgUrl: "",
        title: "안녕하슈",
        explain: "죄송합니다.",
        price: 5000
    },
    {
        id : 4,
        imgUrl: "",
        title: "안녕하슈",
        explain: "죄송합니다.",
        price: 5000
    },
    {
        id : 5,
        imgUrl: "",
        title: "안녕하슈",
        explain: "죄송합니다.",
        price: 5000
    },
    {
        id : 6,
        imgUrl: "",
        title: "안녕하슈",
        explain: "죄송합니다.",
        price: 5000
    },
    {
        id : 7,
        imgUrl: "",
        title: "안녕하슈",
        explain: "죄송합니다.",
        price: 5000
    },
    {
        id : 8,
        imgUrl: "",
        title: "안녕하슈",
        explain: "죄송합니다.",
        price: 5000
    }
];


function mapDataToCard({imgUrl, title, explain, price}) {
    return (
        <Card
            imgUrl={imgUrl}
            title={title}
            explain={explain}
            price={price}
        />
    )
}

function BestCardList(props) {
    return (
        <div className="card-wrap">
            {go(
                arr,
                map(mapDataToCard)
            )}
        </div>
    );
}

export default BestCardList;