import * as t from "../types";

const main = (state = {
    name: "guest",
}, action:any) => {
  switch(action.type){
    case t.SET_NAME:
      return { 
        ...state,
        name: action.payload
      };
    default:
      return {...state};
    }
}

export default main;