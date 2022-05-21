import {
        GET_QUESTION_REQUEST,
    GET_QUESTION_SUCCESS,
    GET_QUESTION_FAILURE
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
