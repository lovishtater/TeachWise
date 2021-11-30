import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar';

// asset
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import PeopleAltTwoToneIcon from '@material-ui/icons/PeopleAltTwoTone';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import PinDropTwoToneIcon from '@material-ui/icons/PinDropTwoTone';
import MoreHorizTwoToneIcon from '@material-ui/icons/MoreHorizTwoTone';
import VideoCallTwoToneIcon from '@material-ui/icons/VideoCallTwoTone';
import ChatBubbleTwoToneIcon from '@material-ui/icons/ChatBubbleTwoTone';

// menu material-ui
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// material-ui tooltip
import Tooltip from '@material-ui/core/Tooltip';

// gird material-ui
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    adressDetail: {
        margin: '2px 0px 0px',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '400',
        fontSize: '0.75rem',
        lineHeight: '1.57',
        color: 'rgb(158, 158, 158)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        display: 'block'
    },
    iconAdress: {
        userSelect: 'none',
        width: '1em',
        height: '1em',
        display: 'inline-block',
        fill: 'currentcolor',
        flexShrink: '0',
        transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        marginRight: '6px',
        fontSize: '16px',
        verticalAlign: 'text-top'
    },
    namePerson: {
        margin: '0px',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '500',
        fontSize: '0.875rem',
        lineHeight: '1.334',
        color: 'rgb(33, 33, 33)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        display: 'block'
    },
    btnEdit: {
        color: '#90caf9',
        cursor: 'pointer'
    },
    avatarAdress: {
        display: 'flex'
    },
    headerFollower: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    btnFollow: {
        width: '100%',
        marginTop: '16px'
    },
    followers: {
        border: ' 1px solid',
        padding: '16px',
        background: '#fafafa',
        borderColor: '#f5f5f5',
        borderRadius: '10px',
        marginTop: '30px',
        marginLeft: '24px',

        '&:hover': {
            border: '1px solid#2196f3'
        }
    },
    nameAndAdress: {
        paddingLeft: '16px',
        width: '70%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    },
    iconUserFollow: {
        marginRight: '7px'
    },
    icons: {
        marginRight: '10px'
    },
    hoverTabs: {
        transition: 'all .5s',
        '&:hover': {
            backgroundColor: 'rgb(237, 231, 246)',
            color: 'rgb(94, 53, 177)'
        }
    },
    btnVideoCall: {
        width: '90%',
        background: '#fff'
    },
    btnChat: {
        width: '90%',
        background: '#fff'
    },
    borderBtn: {
        paddingTop: '20px',
        boxSizing: 'border-box',
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        marginTop: '-8px',
        textAlign: 'center',
        borderColor: '#EDE7F6',
        borderRadius: '4px'
    },
    iconVideoCall: {
        color: 'rgb(94, 53, 177)',
        width: '20px',
        height: '20px'
    },
    iconChat: {
        width: '20px',
        height: '20px'
    },
    borderButton: {
        width: '50%'
    }
}));

const FriendPerson = (friend) => {
    const classes = useStyles();

    // menu material-ui
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Grid item xs={12} sm={6} md={4} lg={3} spacing={3}>
                <div className={classes.followers}>
                    <div className={classes.headerFollower}>
                        <div className={classes.avatarAdress}>
                            <Avatar alt="avatar" src={friend.avatar} />
                            <div className={classes.nameAndAdress}>
                                <div className={classes.namePerson}>{friend.name}</div>
                                <div className={classes.adress}>
                                    <h6 className={classes.adressDetail}>
                                        <PinDropTwoToneIcon className={classes.iconAdress} />
                                        {friend.adress}
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={classes.btnEdit} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                <MoreHorizTwoToneIcon />
                            </div>
                            <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                                <MenuItem onClick={handleClose} className={classes.hoverTabs}>
                                    <FavoriteTwoToneIcon className={classes.icons} /> Favorites
                                </MenuItem>
                                <MenuItem onClick={handleClose} className={classes.hoverTabs}>
                                    <PeopleAltTwoToneIcon className={classes.icons} /> Edit Friend List
                                </MenuItem>
                                <MenuItem onClick={handleClose} className={classes.hoverTabs}>
                                    <DeleteTwoToneIcon className={classes.icons} /> Removed
                                </MenuItem>
                            </Menu>
                        </div>
                    </div>
                    <div>
                        <div className={classes.borderBtn}>
                            <div className={classes.borderButton}>
                                <Tooltip title="Video call" placement="top">
                                    <Button className={classes.btnVideoCall}>
                                        <VideoCallTwoToneIcon className={classes.iconVideoCall} />
                                    </Button>
                                </Tooltip>
                            </div>
                            <div className={classes.borderButton}>
                                <Tooltip title="Message" placement="top">
                                    <Button className={classes.btnChat}>
                                        <ChatBubbleTwoToneIcon className={classes.iconChat} />
                                    </Button>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                </div>
            </Grid>
        </>
    );
};

export default FriendPerson;
