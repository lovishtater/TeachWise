import {
USER_AUTH_REQUEST,
USER_AUTH_SUCCESS,
USER_AUTH_FAIL,
USER_AUTH_LOGOUT
} from '../constants/auth';


export const authReducer =  (state = {}, action: any) => {
    switch (action.type) {
        case USER_AUTH_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case USER_AUTH_SUCCESS:
            return {
                ...state,
                error: null,
                user: action.payload,
                isLoading: false,
            };
        case USER_AUTH_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case USER_AUTH_LOGOUT:
            return {
                ...state,
                user: null,
                error: null,
                isLoading: false,
            };
        default:
            return state;
    }
}