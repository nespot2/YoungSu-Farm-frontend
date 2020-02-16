import {FETCH_BEST_CARD_TYPE} from "../actions/type";

export default (state = [], action) => {
    if (action.type === FETCH_BEST_CARD_TYPE) {
        return action.payload;
}
return state;
}