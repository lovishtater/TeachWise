import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar';

// asset
import PersonAddTwoToneIcon from '@material-ui/icons/PersonAddTwoTone';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import PeopleAltTwoToneIcon from '@material-ui/icons/PeopleAltTwoTone';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import PinDropTwoToneIcon from '@material-ui/icons/PinDropTwoTone';
import MoreHorizTwoToneIcon from '@material-ui/icons/MoreHorizTwoTone';

// menu material-ui
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// gird material-ui
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    adressDetail: {
        margin: '2px 0px 0px',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '400',
        fontSize: '0.75rem',
        lineHeight: '1.57',
        color: 'rgb(158, 158, 158)',
        width: '100%',
        display: 'block',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
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

        display: 'block'
    },
    btnEdit: {
        color: '#90caf9',
        cursor: 'pointer'
    },
    avatarAdress: {
        display: 'flex',
        width: '90%'
    },
    headerFollower: {
        display: 'flex',
        width: '100%'
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
    avatar: {},
    nameAndAdress: {
        paddingLeft: '16px',
        paddingRight: '16px',
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
    borderBtnEdit: {
        width: '10%'
    }
}));

const FollowerPerson = (follower) => {
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
                            <Avatar alt="avatar" src={follower.avatar} className={classes.avatar} />
                            <div className={classes.nameAndAdress}>
                                <div className={classes.namePerson}>{follower.name}</div>
                                <div className={classes.adress}>
                                    <h6 className={classes.adressDetail}>
                                        <PinDropTwoToneIcon className={classes.iconAdress} />
                                        {follower.adress}
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className={classes.borderBtnEdit}>
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
                        {follower.status ? (
                            follower.status === 'true' ? (
                                <Button className={classes.btnFollow} variant="outlined" color="primary">
                                    <PeopleAltTwoToneIcon className={classes.iconUserFollow} /> Followed
                                </Button>
                            ) : (
                                <Button variant="contained" className={classes.btnFollow} color="primary">
                                    <PersonAddTwoToneIcon className={classes.iconUserFollow} /> Follow Back
                                </Button>
                            )
                        ) : (
                            ''
                        )}
                    </div>
                </div>
            </Grid>
        </>
    );
};

export default FollowerPerson;
