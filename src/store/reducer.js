import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import userReducer from './userReducer';
import followersReducer from './followersReducer';
import friendReducer from './friendReducer';
import galleryReducer from './galleryReducer';
import friendrequestReducer from './friendrequestReducer';
//-----------------------|| COMBINE REDUCER ||-----------------------//

const reducer = combineReducers({
    customization: customizationReducer,
    postState: userReducer,
    followerState: followersReducer,
    friendState: friendReducer,
    galleryState: galleryReducer,
    friendrequestState: friendrequestReducer
});

export default reducer;
