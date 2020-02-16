import {combineReducers} from "redux";
import {reducer as formReducer} from 'redux-form';
import bestCardReducers from "./bestCardReducers";
import authReducers from "./authReducers";


export default combineReducers({
    bestCardList: bestCardReducers,
    auth: authReducers,
    form: formReducer
})