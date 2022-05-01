import {SET_POST} from "../types";

const initialState = {
  posts: null,
};

const main = (state = initialState, action:any) => {
  switch(action.type){
    case SET_POST:
      return { 
        ...state,
        posts: action.payload
      };
    default:
      return {...state};
    }
}

export default main;