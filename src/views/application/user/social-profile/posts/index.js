import React from 'react';
import HeaderInfo from './HeaderInfo';
// material-ui
import { makeStyles } from '@material-ui/styles';
import ContentPost from './ContentPost';
import FormBtnLikeCmt from './FormBtnLikeCmt';
import Comment from './Comment';

import { useSelector } from 'react-redux';

// style constant
const useStyles = makeStyles((theme) => ({
    post: {
        paddingTop: '24px'
    },
    postContent: {
        background: '#fff',
        padding: '24px',
        borderRadius: '12px',
        border: '1px solid rgba(144, 202, 249, 0.46)'
    },
    iconLike: {
        fontSize: '18px',
        marginRight: '8px'
    },
    iconCmt: {
        fontSize: '18px',
        marginRight: '8px',
        color: '#673ab7'
    },
    likecmt: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '8px',
        marginTop: '20px',
        cursor: 'pointer'
    }
}));

const Post = () => {
    const classes = useStyles();

    const arrPost = useSelector((state) => state.postState.arrPost);

    return (
        <React.Fragment>
            {arrPost
                ? arrPost.map((post) => (
                      <div key={post.id} className={classes.post}>
                          <div className={classes.postContent}>
                              <HeaderInfo {...post} />
                              <ContentPost {...post} />
                              <FormBtnLikeCmt {...post} />
                              {post.comment ? post.comment.map((cmt) => <Comment key={cmt.id} {...cmt} />) : ''}
                          </div>
                      </div>
                  ))
                : ''}
        </React.Fragment>
    );
};

export default Post;
