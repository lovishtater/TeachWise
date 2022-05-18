import axios from 'axios';
import {
USER_AUTH_REQUEST,
USER_AUTH_SUCCESS,
USER_AUTH_FAIL,
USER_AUTH_LOGOUT
} from '../constants/auth';

import {app} from '../../@core/configs/firebase'
import firebase from "firebase/compat/app"
import "firebase/compat/auth"

export const signUp =  (values:any) => async (dispatch: any) => {
    try{
    dispatch({
        type: USER_AUTH_REQUEST,
    });
    const googleResponse = localStorage.getItem('tempUser') ? JSON.parse(localStorage.getItem('tempUser') as string) : null;
    const currUser = firebase.auth().currentUser;
    const user = {
        ...values,
        email : googleResponse.email,
        googleUid : googleResponse.uid,
    }
    const token = await currUser?.getIdToken(true);
    if(token)
    localStorage.setItem('teachWiseAuthToken', token);
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}/api/signup`, 
    user, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });
    localStorage.removeItem('tempUser');
        localStorage.setItem('teachWiseUser', JSON.stringify(response.data));
        localStorage.setItem('teachWiseToken', JSON.stringify(googleResponse.user));
    dispatch({
        type: USER_AUTH_SUCCESS,
        payload: {...response.data.user, ...googleResponse},
    });
    }catch(error : any){
        dispatch({
            type: USER_AUTH_FAIL,
            payload: error.message,
        });
    }
}

export const signIn = ({email, password} : any) => async (dispatch: any) => {
    try{
    dispatch({
        type: USER_AUTH_REQUEST,
    });
    
    const googleResponse = await app.auth().signInWithEmailAndPassword(email, password);
    const currUser = firebase.auth().currentUser;
    const token = await currUser?.getIdToken(true)
    if(token)
    localStorage.setItem('teachWiseAuthToken', token);
    const data = { 
        email: email,
        googleUid : googleResponse ? googleResponse.user?.uid : null,
    }
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}/api/signin`,data , {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }});
        localStorage.setItem('teachWiseUser', JSON.stringify(response.data));
        localStorage.setItem('teachWiseToken', JSON.stringify(googleResponse.user));
        dispatch({
        type: USER_AUTH_SUCCESS,
        payload: response.data,
    });
    }catch(error : any){
        dispatch({
            type: USER_AUTH_FAIL,
            payload: error.message,
        });
    }
}


export const logout = () => async (dispatch: any) => {
    try{
        await app.auth().signOut();
        localStorage.removeItem('teachWiseUser');
        localStorage.removeItem('teachWiseToken');
    dispatch({
        type: USER_AUTH_LOGOUT,
    });
    }catch(error : any){
        dispatch({
            type: USER_AUTH_FAIL,
            payload: error.message,
        });
    }
}



    
