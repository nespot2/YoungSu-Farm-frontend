import {SIGN_OUT_TYPE} from "./type";

export default (userInfo) => {
    return {
        type: SIGN_OUT_TYPE,
        payload: {
            isSignIn: true,
            userInfo
        }
    }
}