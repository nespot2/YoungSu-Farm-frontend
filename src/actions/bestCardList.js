import {FETCH_BEST_CARD_TYPE} from "./type";
import axios from 'axios';
import {go, map, baseSel, head} from 'fxjs';


export default () => async (dispath) => {

    const data = await go(
        axios.get("/v1/product/recommend"),
        response => response.data.d,
        map(mapDataToProps)
    );

    dispath({type: FETCH_BEST_CARD_TYPE, payload: data});
}

function mapDataToProps(data) {

    let sel = baseSel(".");

    const imgUrl = head(data.productImageDtoList || []);

    const productId = sel('productDto.productId', data);
    const productName = sel('productDto.productName', data);
    const price = sel('productDto.price', data);


    return {
        id: productId,
        imgUrl: imgUrl,
        title: productName,
        explain: productName,
        price: price
    }

}