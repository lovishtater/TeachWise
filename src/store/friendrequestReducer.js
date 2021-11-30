import { datafriendrequest } from '../_mockApis/application/users/social-profile/datafriendrequest';

export const initialState = {
    arrfriendrequest: datafriendrequest
};

const friendrequestReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default friendrequestReducer;
