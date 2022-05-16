import { applyMiddleware, combineReducers, compose } from "redux"
import {configureStore } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import { createWrapper } from "next-redux-wrapper"
import { userSignup } from "./reducers/auth"
const middleware = [thunk]


//old code 
// const makeStore = () => createStore(rootReducer, compose(applyMiddleware(...middleware)))
const reducer = combineReducers({
    auth : userSignup
})

const initialState = {
    auth : {
        isLoading : false,
        isError : false,
        user : null,
    }
};

const store = () => configureStore({
    reducer,
    initialState,
    middleware
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const wrapper = createWrapper(store)