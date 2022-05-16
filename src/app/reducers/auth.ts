import {
USER_SIGNUP_REQUEST,
USER_SIGNUP_SUCCESS,
USER_SIGNUP_FAIL,
USER_SIGNIN_REQUEST,
USER_SIGNIN_SUCCESS,
USER_SIGNIN_FAIL,
USER_LOGOUT,
USER_SIGNOUT_REQUEST,
USER_SIGNOUT_SUCCESS,
USER_SIGNOUT_FAIL,
} from '../constants/auth';


export const userSignup =  (state = {}, action: any) => {
    switch (action.type) {
        case USER_SIGNUP_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        case USER_SIGNUP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                user: action.payload,
            };
        case USER_SIGNUP_FAIL:
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        default:
            return state;
    }
}