import { datafollowers } from '../_mockApis/application/users/social-profile/datafollowers';

export const initialState = {
    arrFollowers: datafollowers
};

const followersReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default followersReducer;
