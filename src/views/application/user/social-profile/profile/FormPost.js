import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import AttachmentIcon from '@material-ui/icons/Attachment';
import LayersIcon from '@material-ui/icons/Layers';
import { Button } from '@material-ui/core';

// style constant
const useStyles = makeStyles((theme) => ({
    formPost: {
        paddingTop: '24px',
        width: '100%'
    },
    textPost: {
        border: '1x solid red',
        width: '100%',
        borderRadius: '8px',
        height: 'auto',
        background: 'rgb(250, 250, 250)',
        padding: '15.5px 14px',
        fontStyle: 'inherit',
        fontVariant: 'inherit',
        fontStretch: 'inherit',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        fontFamily: 'inherit',
        letterSpacing: 'inherit',
        margin: '0px',
        display: 'block',
        minWidth: '0px',
        resize: 'none',
        color: 'rgb(33, 33, 33)',
        borderWadius: '12px',
        borderColor: 'rgba(0, 0, 0, 0.23)',
        '&:focus': {
            outline: '0px',
            border: '2px solid #2196f3'
        }
    },
    postContent: {
        padding: '24px',
        backgroundColor: 'white',
        borderRadius: '12px',
        border: '1px solid rgba(144, 202, 249, 0.46)'
    },
    iconLayer: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '5px'
    },
    buttonPost: {
        background: '#673ab7',
        color: 'white',
        '&:hover': {
            background: '#673ab7'
        }
    },
    buttonGallery: {
        color: '#673ab7'
    },
    buttons: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: '24px'
    }
}));

const FormPost = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.formPost}>
                <div className={classes.postContent}>
                    <textarea className={classes.textPost} placeholder="What’s on your mind, Larry?" rows="4" />
                    <div className={classes.buttons}>
                        <Button className={classes.buttonGallery}>
                            <AttachmentIcon className={classes.iconLayer} />
                            Gallery
                        </Button>
                        <Button className={classes.buttonPost}>
                            <LayersIcon className={classes.iconLayer} />
                            Post
                        </Button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default FormPost;
