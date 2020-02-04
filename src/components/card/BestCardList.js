import React from 'react';
import {go, map} from 'fxjs';

import Card from './Card';


const arr = [
    {
        imgUrl: "https://s3.ap-northeast-2.amazonaws.com/dev-image.laundrygo.com/banner/aiiw082sy4zfv8j717ckhw5ctst7324tzpo05bpmi88tnfz0hjh0skpi491v8tuvn71zp1qcv341916xriz1fm9zt6rf9qeowl3s.jpg",
        title: "안녕하슈",
        explain: "죄송합니다.",
        price: 5000
    },
    {
        imgUrl: "https://s3.ap-northeast-2.amazonaws.com/dev-image.laundrygo.com/banner/aiiw082sy4zfv8j717ckhw5ctst7324tzpo05bpmi88tnfz0hjh0skpi491v8tuvn71zp1qcv341916xriz1fm9zt6rf9qeowl3s.jpg",
        title: "안녕하슈",
        explain: "죄송합니다.",
        price: 5000
    },
    {
        imgUrl: "https://s3.ap-northeast-2.amazonaws.com/dev-image.laundrygo.com/banner/aiiw082sy4zfv8j717ckhw5ctst7324tzpo05bpmi88tnfz0hjh0skpi491v8tuvn71zp1qcv341916xriz1fm9zt6rf9qeowl3s.jpg",
        title: "안녕하슈",
        explain: "죄송합니다.",
        price: 5000
    },
    {
        imgUrl: "https://s3.ap-northeast-2.amazonaws.com/dev-image.laundrygo.com/banner/aiiw082sy4zfv8j717ckhw5ctst7324tzpo05bpmi88tnfz0hjh0skpi491v8tuvn71zp1qcv341916xriz1fm9zt6rf9qeowl3s.jpg",
        title: "안녕하슈",
        explain: "죄송합니다.",
        price: 5000
    },
    {
        imgUrl: "https://s3.ap-northeast-2.amazonaws.com/dev-image.laundrygo.com/banner/aiiw082sy4zfv8j717ckhw5ctst7324tzpo05bpmi88tnfz0hjh0skpi491v8tuvn71zp1qcv341916xriz1fm9zt6rf9qeowl3s.jpg",
        title: "안녕하슈",
        explain: "죄송합니다.",
        price: 5000
    },
    {
        imgUrl: "https://s3.ap-northeast-2.amazonaws.com/dev-image.laundrygo.com/banner/aiiw082sy4zfv8j717ckhw5ctst7324tzpo05bpmi88tnfz0hjh0skpi491v8tuvn71zp1qcv341916xriz1fm9zt6rf9qeowl3s.jpg",
        title: "안녕하슈",
        explain: "죄송합니다.",
        price: 5000
    },
    {
        imgUrl: "https://s3.ap-northeast-2.amazonaws.com/dev-image.laundrygo.com/banner/aiiw082sy4zfv8j717ckhw5ctst7324tzpo05bpmi88tnfz0hjh0skpi491v8tuvn71zp1qcv341916xriz1fm9zt6rf9qeowl3s.jpg",
        title: "안녕하슈",
        explain: "죄송합니다.",
        price: 5000
    },
    {
        imgUrl: "https://s3.ap-northeast-2.amazonaws.com/dev-image.laundrygo.com/banner/aiiw082sy4zfv8j717ckhw5ctst7324tzpo05bpmi88tnfz0hjh0skpi491v8tuvn71zp1qcv341916xriz1fm9zt6rf9qeowl3s.jpg",
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