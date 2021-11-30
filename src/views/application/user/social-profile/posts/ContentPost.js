/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';

// style constant
const useStyles = makeStyles((theme) => ({
    content: {
        fontSize: '0.875rem',
        fontFamily: " 'Roboto', sans-serif",
        fontWeight: '400',
        lineHeight: '1.334em',
        marginBottom: '15px',
        whiteSpace: 'pre-line'
    },
    imagepost: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '12px'
    },
    boderImg: {
        display: 'flex',
        gridTemplateClumns: 'repeat(2, 1fr)',
        gap: '8px'
    },
    imgmot: {
        width: '50%',
        position: 'relative'
    },
    imghai: {
        width: '50%',
        position: 'relative'
    },
    contentImage1: {
        color: 'rgb(255, 255, 255)',
        width: '100%',
        padding: '12px 16px',
        background: 'linear-gradient(rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 70%, rgba(0, 0, 0, 0) 100%)',
        position: 'absolute',
        borderRadius: '12px',
        top: '0px',
        left: '0px',
        fontSize: '1rem',
        lineHeight: '24px'
    },
    contentImage2: {
        color: 'rgb(255, 255, 255)',
        width: '100%',
        padding: '12px 16px',
        background: 'linear-gradient(rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 70%, rgba(0, 0, 0, 0) 100%)',
        position: 'absolute',
        borderRadius: '12px',
        top: '0px',
        left: '0px',
        fontSize: '1rem',
        lineHeight: '24px'
    },
    video: {
        display: 'Block',
        backgroundSize: 'coverBlock',
        backgroundRepeat: 'no-repeatBlock',
        backgroundPosition: 'center centerBlock',
        width: '100%Block',
        borderRadius: '12pxBlock !important'
    }
}));

const ContentPost = (post) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div>
                <p className={classes.content}>{post.contentPost}</p>
                {post.imagePost.length === 1 ? <img alt="image-post" src={post.imagePost} className={classes.imagepost} /> : ''}
                {post.imagePost.length === 2 ? (
                    <div>
                        <div className={classes.boderImg}>
                            <div className={classes.imgmot}>
                                <div className={classes.contentImage1}>Image Title</div>
                                <img alt="image-post" src={post.imagePost[1]} className={classes.imagepost} />
                            </div>
                            <div className={classes.imghai}>
                                <div className={classes.contentImage2}>Painter</div>
                                <img alt="image-post" src={post.imagePost[0]} className={classes.imagepost} />
                            </div>
                        </div>
                    </div>
                ) : (
                    ''
                )}
                {post.urlVideo ? (
                    <iframe
                        className={classes.video}
                        width="100%"
                        height="315"
                        src={`https://www.youtube.com/embed/${post.urlVideo}`}
                        title="videoyoutube"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                ) : (
                    ''
                )}
            </div>
        </React.Fragment>
    );
};

export default ContentPost;
