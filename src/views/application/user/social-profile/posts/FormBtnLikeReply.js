import React from 'react';
import ReplyTwoToneIcon from '@material-ui/icons/ReplyTwoTone';
import ThumbUpAltTwoToneIcon from '@material-ui/icons/ThumbUpAltTwoTone';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';

import avatar from '../../../../../assets/images/application/user/social-profile/img-user.41a8c066.png';
import { Avatar } from '@material-ui/core';

// Transitions Collapse
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles((theme) => ({
    iconLike: {
        fontSize: '18px',
        marginRight: '8px'
    },
    iconReply: {
        fontSize: '18px',
        marginRight: '8px',
        color: 'rgb(33, 150, 243)'
    },
    likecmt: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '20px',
        marginTop: '8px',
        cursor: 'pointer',
        fontWeight: '700',
        fontSize: '12px',
        padding: '4px 5px',
        transition: 'all .5s',
        borderRadius: '5px',
        '&:hover': {
            textDecoration: 'none',
            backgroundColor: 'rgba(97, 97, 97, 0.04)'
        }
    },
    borderLikeCmt: {
        display: 'flex',
        marginTop: '8px',
        marginBottom: '13px',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textField: {
        width: '100%'
    },
    borderTextField: {
        width: '100%',
        paddingTop: '16px',
        paddingLeft: '16px'
    },
    borderLikeCmtHindden: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    avatar: {
        width: '34px',
        height: '34px'
    },
    borderAvatar: {
        paddingTop: '16px'
    },
    btnComment: {
        paddingTop: '16px',
        paddingLeft: '16px'
    },
    //Collapse
    root: {
        width: '100%'
    },
    container: {
        // display: 'flex'
    },
    onClickIconLike: {
        color: 'rgb(33, 150, 243)',
        fontSize: '18px',
        marginRight: '8px'
    },
    btnCover: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnEditDelete: {
        cursor: 'pointer'
    },
    btnThereDots: {
        fontSize: '15px'
    },
    iconsFromBtnShare: {
        fontSize: '1.25rem',
        marginRight: '14px'
    }
}));

const FormBtnLikeReply = () => {
    const classes = useStyles();

    const [checked, setChecked] = React.useState(false);

    const [like, setLike] = React.useState(false);
    const [score, setScore] = React.useState(10);

    const handleClickCmt = () => {
        setChecked((prev) => !prev);
    };

    const handleClickToLike = async () => {
        await setLike((prev) => !prev);
        if (like) {
            setScore(score - 1);
        } else {
            setScore(score + 1);
        }
    };

    return (
        <>
            {/* like and comment */}
            <div className={classes.borderLikeCmt}>
                {/* button like and comment */}
                <div>
                    <div className={classes.likecmt} onClick={handleClickToLike}>
                        {like ? (
                            <>
                                <ThumbUpAltTwoToneIcon className={classes.onClickIconLike} /> {score} Likes
                            </>
                        ) : (
                            <>
                                <ThumbUpAltTwoToneIcon className={classes.iconLike} /> {score} Likes
                            </>
                        )}
                    </div>
                    <div className={classes.likecmt} onClick={handleClickCmt}>
                        <ReplyTwoToneIcon className={classes.iconReply} /> 10 Reply
                    </div>
                </div>
            </div>

            <div className={classes.root}>
                {/* <FormControlLabel control={<Switch checked={checked} onChange={handleChange} />} label="Show" /> */}
                <div className={classes.container}>
                    <Collapse in={checked}>
                        <div>
                            <div className={classes.borderLikeCmtHindden}>
                                <div className={classes.borderAvatar}>
                                    <Avatar className={classes.avatar} src={avatar} alt="avatar" />
                                </div>

                                <div className={classes.borderTextField}>
                                    <TextField
                                        className={classes.textField}
                                        id="outlined-basic"
                                        label="Write a comment..."
                                        variant="outlined"
                                    />
                                </div>
                                <div className={classes.btnComment}>
                                    <Button variant="contained" color="secondary">
                                        Reply
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Collapse>
                </div>
            </div>
        </>
    );
};

export default FormBtnLikeReply;
