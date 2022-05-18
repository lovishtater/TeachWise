import {SET_MESSAGES} from "../constants/messages";
import axios from "axios";

const API =process.env.NEXT_PUBLIC_BACKEND;
const token = localStorage.getItem('teachWiseAuthToken');

export const sendMessages = (message:any) => async(dispatch:any) => { 


    console.log("token auth",token)
  //here API call with axios
    console.log("fetched message",message)

    try{
      const response = await axios.post(`${API}/api/addMessage`,message, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }});
      console.log("response of message",response);
      dispatch({
        type: SET_MESSAGES,
        payload: message,
      });
    }
    catch(err:any) {
      console.log("message error",err);
    } 
}