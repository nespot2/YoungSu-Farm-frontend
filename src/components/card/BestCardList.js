import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {go, map} from 'fxjs';
import {fetchBestCardList} from "../../actions";

import Card from './Card';


function mapDataToCard({id, imgUrl, title, explain, price}) {
    return (
        <Card
            key={id}
            imgUrl={imgUrl}
            title={title}
            explain={explain}
            price={price}
        />
    )
}

function BestCardList({bestCardList, fetchBestCardList}) {

    useEffect(() => {
        fetchBestCardList();
    }, [fetchBestCardList]);

    return (
        <div className="card-wrap">
            {go(
                bestCardList,
                map(mapDataToCard)
            )}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        bestCardList: state.bestCardList
    }

};
export default connect(mapStateToProps, {
    fetchBestCardList
})(BestCardList);