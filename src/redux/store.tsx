import { applyMiddleware, compose } from "redux"
import {configureStore } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import { createWrapper } from "next-redux-wrapper"
import rootReducer from "./reducers/rootReducer"

const middleware = [thunk]


//old code 
// const makeStore = () => createStore(rootReducer, compose(applyMiddleware(...middleware)))


const makeStore = () => configureStore({
    reducer: rootReducer,
    middleware: [...middleware]
})

export const wrapper = createWrapper(makeStore)