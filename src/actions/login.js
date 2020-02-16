import {SIGN_IN_TYPE} from "./type";

export default (userInfo) => {
    return {
        type: SIGN_IN_TYPE,
        payload: {
            isSignIn: true,
            userInfo
        }
    }
}