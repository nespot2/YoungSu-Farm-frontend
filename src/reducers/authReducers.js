import {SIGN_IN_TYPE} from "../actions/type";
import {SIGN_OUT_TYPE} from "../actions/type";

const init = {
    isSignIn: null,
    userInfo: null
}

export default (state = init, action) => {
    switch (action.type) {
        case SIGN_IN_TYPE :
            return {...state, isSignIn: action.payload.isSignIn, userInfo: action.payload.userInfo};
        case SIGN_OUT_TYPE :
            return {...state, isSignIn: action.payload.isSignIn}
        default :
            return state;
    }
}