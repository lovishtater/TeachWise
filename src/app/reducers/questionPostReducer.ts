import {
        GET_QUESTION_REQUEST,
        GET_QUESTION_FAILURE,
        GET_QUESTION_SUCCESS,
        GET_USER_DOUBT_SUCCESS,
        GET_USER_DOUBT_REQUEST,
        GET_USER_DOUBT_FAILURE
} from '../constants/questionPost';

export const getQuestionReducer = (state = {}, action: any) => {
    switch (action.type) {
        case GET_QUESTION_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case GET_QUESTION_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                question: action.payload
            };
        case GET_QUESTION_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
}

export const getUserDoubtReducer = (state = {}, action: any) => {
    switch (action.type) {
        case GET_USER_DOUBT_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case GET_USER_DOUBT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                userDoubt: action.payload
            };
        case GET_USER_DOUBT_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
}
