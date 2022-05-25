import { applyMiddleware, combineReducers, compose } from "redux"
import {configureStore } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import { createWrapper } from "next-redux-wrapper"
import { authReducer } from "./reducers/auth"
import { themeReducer } from "./reducers/theme"


//old code 
// const makeStore = () => createStore(rootReducer, compose(applyMiddleware(...middleware)))
const reducer = combineReducers({
    auth : authReducer,
    theme: themeReducer
})

// const initialState = {
//     auth : {
//         isLoading : false,
//         error : null,
//         user : null,
//     }
// };

const store = () => configureStore({
    reducer,
    //TODO:tater check this
    // middleware
});


export type RootState = any;
export type AppDispatch = any;
export const wrapper = createWrapper(store)

//TO DO: add types to the reducers
// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch