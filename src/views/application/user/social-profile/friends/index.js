import React, { useState } from 'react';
import { useSelector } from 'react-redux';

//input adornments
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

// material-ui
import { makeStyles } from '@material-ui/styles';
import FriendPerson from './FriendPerson';

// gird material-ui
import Grid from '@material-ui/core/Grid';

// asset
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    follower: {
        marginTop: '24px',
        padding: '24px',
        backgroundColor: 'white',
        borderRadius: '12px'
    },
    headerFollower: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    followerTitle: {
        margin: '0px',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '600',
        fontSize: '1.25rem',
        lineHeight: '1.167',
        color: 'rgb(33, 33, 33)'
    },
    divSearch: {
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '400',
        fontSize: '0.875rem',
        lineHeight: '1em !important',
        color: 'rgb(97, 97, 97)',
        boxSizing: 'border-box',
        cursor: 'text',
        display: 'inline-flex',
        alignItems: 'center',
        position: 'relative',
        borderRadius: '12px'
    },
    inputSearch: {
        padding: ' 10px 14px !important'
    },
    formFollower: {
        backgroundColor: 'white',
        borderRadius: '12px'
    },
    formFollowPerson: {
        paddingRight: '24px',
        paddingBottom: '24px'
    },
    tagHr: {
        margin: '0px',
        flexShrink: '0',
        borderStyle: 'solid',
        borderColor: 'rgb(238, 238, 238)',
        opacity: '1',
        borderWidth: '0px 0px thin'
    },
    numberFriend: {
        margin: '0px',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '1.25rem',
        lineHeight: '1.167',
        color: 'rgb(224, 224, 224)',
        fontWeight: '500'
    }
}));

export default function Friend() {
    const classes = useStyles();

    const arrFriend = useSelector((state) => state.friendState.arrfriends);
    const [data, setData] = useState();

    const handleFilter = (e) => {
        const { value } = e.target;
        if (value !== '') {
            setData(arrFriend.filter((fl) => fl.name.toLowerCase().includes(value.toLowerCase())));
        } else {
            setData('');
        }
    };

    return (
        <>
            <div className={classes.formFollower}>
                <div className={classes.follower}>
                    <div className={classes.headerFollower}>
                        <h3 className={classes.followerTitle}>
                            Friend <span className={classes.numberFriend}>(460)</span>
                        </h3>
                        <div className={classes.divSearch}>
                            <TextField
                                id="outlined-start-adornment"
                                placeholder="Search"
                                className={classes.inputSearch}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    )
                                }}
                                onChange={handleFilter}
                                variant="outlined"
                            />
                        </div>
                    </div>
                </div>
                <hr className={classes.tagHr} />
                <div className={classes.formFollowPerson}>
                    <Grid container>
                        {data
                            ? data.map((friend, index) => <FriendPerson key={index} {...friend} />)
                            : arrFriend
                            ? arrFriend.map((friend, index) => <FriendPerson key={index} {...friend} />)
                            : ''}
                    </Grid>
                </div>
            </div>
        </>
    );
}
