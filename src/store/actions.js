// action - customization reducer
export const SET_MENU = '@customization/SET_MENU';
export const MENU_OPEN = '@customization/MENU_OPEN';
export const SET_FONT_FAMILY = '@customization/SET_FONT_FAMILY';
export const SET_BORDER_RADIUS = '@customization/SET_BORDER_RADIUS';

// User actions
export const UserCommentAction = (newValues) => {
    return {
        type: 'POST_COMMENT',
        data: newValues
    };
};

export const PostReplyCommentAction = (newValues) => {
    return {
        type: 'POST_REPLY_COMMENT',
        data: newValues
    };
};
