import {
  SET_THEME
} from '../constants/theme';

export const themeReducer =  (state = {}, action: any) => {
  switch (action.type) {
      case SET_THEME:
          return {
              ...state,
              isLoading: true,
              error: null,
          };
      default:
          return state;
  }
}