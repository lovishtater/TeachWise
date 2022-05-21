import { applyMiddleware, combineReducers, compose } from "redux"
import {configureStore } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import { createWrapper } from "next-redux-wrapper"
import { authReducer } from "./reducers/auth"
import {getQuestionReducer} from "./reducers/questionPostReducer"
const middleware = [thunk]

interface IState {
    auth: any
    questions: any
}

//old code 
// const makeStore = () => createStore(rootReducer, compose(applyMiddleware(...middleware)))

const reducer = combineReducers({
    auth : authReducer,
    questions : getQuestionReducer
})

const initialState: IState = {
    auth : {
        isLoading : false,
        error : null,
        user : null
    },
    questions : {
        isLoading : false,
        error : null,
        questions : []
    }
};

const store = () => configureStore({
    reducer,
    //@ts-ignore
    initialState,
    middleware
});


export type RootState = any;
export type AppDispatch = any;
export const wrapper = createWrapper(store)

//TO DO: add types to the reducers
// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch