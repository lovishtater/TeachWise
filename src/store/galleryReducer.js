import { datagallery } from '../_mockApis/application/users/social-profile/datagallery';

export const initialState = {
    arrgallery: datagallery
};

const galleryReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default galleryReducer;
