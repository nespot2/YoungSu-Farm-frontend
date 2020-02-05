import {combineReducers} from "redux";
import {reducer as formReducer} from 'redux-form';
import bestCardReducers from "./bestCardReducers";

export default combineReducers({
    bestCardList: bestCardReducers,
    form: formReducer
})