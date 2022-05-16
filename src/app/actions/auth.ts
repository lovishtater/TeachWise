import axios from 'axios';
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

import {app} from '../../configs/firebase'
import firebase from "firebase/compat/app"
import "firebase/compat/auth"

export const userSignup =  (values:any) => async (dispatch: any) => {
    try{
    dispatch({
        type: USER_SIGNUP_REQUEST,
    });
    const googleResponse = localStorage.getItem('tempUser') ? JSON.parse(localStorage.getItem('tempUser') as string) : null;
    const user = {
        ...values,
        email : googleResponse.email,
        googleUid : googleResponse.uid,
    }
    const currUser = firebase.auth().currentUser;
    await currUser?.getIdToken(true).then((res) => {
      localStorage.setItem("token", res);
    });
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}/api/signup`, 
    user, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    });
    localStorage.removeItem('tempUser');
    localStorage.setItem('TeachWiseUser', JSON.stringify({...response.data.user, ...googleResponse}));
    dispatch({
        type: USER_SIGNUP_SUCCESS,
        payload: {...response.data.user, ...googleResponse},
    });
    }catch(error : any){
        dispatch({
            type: USER_SIGNUP_FAIL,
            payload: error.message,
        });
    }
}

export const userSignin = (user:any) => async (dispatch: any) => {
    try{
    dispatch({
        type: USER_SIGNIN_REQUEST,
    });
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}/api/signin`, user);
    dispatch({
        type: USER_SIGNIN_SUCCESS,
        payload: response.data,
    });
    }catch(error : any){
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload: error.message,
        });
    }
}


export const userLogout = (user:any) => async (dispatch: any) => {
    try{
    dispatch({
        type: USER_SIGNOUT_REQUEST,
    });
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}/api/signout`, user);
    dispatch({
        type: USER_SIGNOUT_SUCCESS,
        payload: response.data,
    });
    }catch(error : any){
        dispatch({
            type: USER_SIGNOUT_FAIL,
            payload: error.message,
        });
    }
}



    
