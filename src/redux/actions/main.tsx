import {SET_POST} from "../types";
import axios from "axios";
// import { request } from "../../util/request";

export const setPost = (post:any) => (dispatch:any) => {

  console.log("fetched data",post)

  

  dispatch({
    type: SET_POST,
    payload: name,
  });
}