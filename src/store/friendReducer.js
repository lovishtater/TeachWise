import { datafriend } from '../_mockApis/application/users/social-profile/datafriend';

export const initialState = {
    arrfriends: datafriend
};

const friendReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default friendReducer;
