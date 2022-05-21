import {
  SET_MESSAGES
} from '../constants/messages';
  
  
  export const authReducer =  (state = {}, action: any) => {
      switch (action.type) {
          case SET_MESSAGES:
              return {
                  ...state,
                  isLoading: true,
                  error: null,
              };
          default:
              return state;
      }
  }