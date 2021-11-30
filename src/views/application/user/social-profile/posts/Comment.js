import React, { useState } from 'react';
import ReplyTwoToneIcon from '@material-ui/icons/ReplyTwoTone';
import ThumbUpAltTwoToneIcon from '@material-ui/icons/ThumbUpAltTwoTone';
import Button from '@material-ui/core/Button';

// material-ui
import { makeStyles } from '@material-ui/styles';
import HeaderCmt from './HeaderCmt';

// Transitions Collapse
import Collapse from '@material-ui/core/Collapse';

import { Avatar } from '@material-ui/core';

import InputAdornment from '@material-ui/core/InputAdornment';

import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';
import AttachmentIcon from '@material-ui/icons/Attachment';

import { useDispatch } from 'react-redux';
import { PostReplyCommentAction } from '../../../../../store/actions';

// style constant
const useStyles = makeStyles((theme) => ({
    comment: {
        padding: '16px 16px 8px',
        background: '#fafafa',
        marginTop: '15px',
        marginLeft: '15px',
        borderRadius: '12px'
    },
    contentCmt: {
        paddingTop: '10px'
    },
    // btn like and reply
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
        paddingTop: '16px',
        paddingLeft: '64px'
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
        color: '#673ab7',
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
    },
    margin: {
        margin: theme.spacing(1)
    },
    replyCmt: {
        marginLeft: '50px'
    }
}));
const Comment = (cmt) => {
    const classes = useStyles();

    const [checked, setChecked] = React.useState(false);

    const [like, setLike] = React.useState(cmt.like);
    const [likeReply, setLikereply] = React.useState(false);
    const [score, setScore] = React.useState(cmt.numberOfLike);
    const [scoreReply, setScoreReply] = React.useState(0);

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

    const handleClickToLikeReply = async () => {
        await setLikereply((prev) => !prev);
        if (likeReply) {
            setScoreReply(scoreReply - 1);
        } else {
            setScoreReply(scoreReply + 1);
        }
    };

    const dispatch = useDispatch();

    const [dataReplyCmt, setDataReplyCmt] = useState('');

    const handleChange = (e) => {
        const { value } = e.target;
        setDataReplyCmt(value);
    };
    const PostComment = async () => {
        const newValues = { dataPost: dataReplyCmt, idCmt: cmt.id, idpost: cmt.idpost };
        dispatch(await PostReplyCommentAction(newValues));
        setChecked((prev) => !prev);
        setDataReplyCmt('');
    };

    return (
        <React.Fragment>
            {cmt.contentComment ? (
                <>
                    <div className={classes.comment}>
                        <HeaderCmt {...cmt} />
                        <div className={classes.contentCmt}>{cmt.contentComment}</div>
                        <div className={classes.borderLikeCmt}>
                            {/* button like and reply */}
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
                                    <ReplyTwoToneIcon className={classes.iconReply} />
                                    {cmt.reply.length} Reply
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* like and reply */}
                    {cmt.reply
                        ? cmt.reply.map((reply) => (
                              <div className={classes.replyCmt}>
                                  {reply.contentReply ? (
                                      <div className={classes.comment}>
                                          <HeaderCmt {...cmt} />
                                          <div className={classes.contentCmt}>{reply.contentReply}</div>
                                          <div className={classes.borderLikeCmt}>
                                              {/* button like and reply */}
                                              <div>
                                                  <div className={classes.likecmt} onClick={handleClickToLikeReply}>
                                                      {likeReply ? (
                                                          <>
                                                              <ThumbUpAltTwoToneIcon className={classes.onClickIconLike} /> {scoreReply}{' '}
                                                              Likes
                                                          </>
                                                      ) : (
                                                          <>
                                                              <ThumbUpAltTwoToneIcon className={classes.iconLike} /> {scoreReply} Likes
                                                          </>
                                                      )}
                                                  </div>
                                                  <div className={classes.likecmt} onClick={handleClickCmt}>
                                                      <ReplyTwoToneIcon className={classes.iconReply} /> Reply
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  ) : (
                                      ''
                                  )}
                              </div>
                          ))
                        : ''}

                    <div className={classes.root}>
                        {/* <FormControlLabel control={<Switch checked={checked} onChange={handleChange} />} label="Show" /> */}
                        <div className={classes.container}>
                            <Collapse in={checked}>
                                <div>
                                    <div className={classes.borderLikeCmtHindden}>
                                        <div className={classes.borderAvatar}>
                                            {cmt.imageCmt ? (
                                                <Avatar className={classes.avatar} src={cmt.imageCmt} alt="avatar" />
                                            ) : (
                                                <Avatar className={classes.avatar} src={cmt.avatar} alt="avatar" />
                                            )}
                                        </div>

                                        <div className={classes.borderTextField}>
                                            <TextField
                                                label="Write a reply..."
                                                id="outlined-start-adornment"
                                                className={clsx(classes.margin, classes.textField)}
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <AttachmentIcon />
                                                        </InputAdornment>
                                                    )
                                                }}
                                                variant="outlined"
                                                onChange={handleChange}
                                                value={dataReplyCmt}
                                            />
                                        </div>
                                        <div className={classes.btnComment}>
                                            <Button variant="contained" color="secondary" onClick={PostComment}>
                                                Replydd
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Collapse>
                        </div>
                    </div>
                </>
            ) : (
                ''
            )}
        </React.Fragment>
    );
};

export default Comment;
