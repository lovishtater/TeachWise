import React, { useState } from 'react';
import { useSelector } from 'react-redux';

//input adornments
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

// material-ui
import { makeStyles } from '@material-ui/styles';
import FollowerPerson from './FollowerPerson';

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
    }
}));

export default function Follower() {
    const classes = useStyles();

    const arrFollowes = useSelector((state) => state.followerState.arrFollowers);
    const [data, setData] = useState();

    const handleFilter = (e) => {
        const { value } = e.target;
        if (value !== '') {
            console.log(value);
            setData(arrFollowes.filter((fl) => fl.name.toLowerCase().includes(value.toLowerCase())));
            console.log(data);
        } else {
            setData('');
        }
    };

    return (
        <>
            <div className={classes.formFollower}>
                <div className={classes.follower}>
                    <div className={classes.headerFollower}>
                        <h3 className={classes.followerTitle}>Followers</h3>
                        <div className={classes.divSearch}>
                            <TextField
                                id="outlined-start-adornment"
                                placeholder="Search Followers"
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
                            ? data.map((follower) => <FollowerPerson key={follower.id} {...follower} />)
                            : arrFollowes
                            ? arrFollowes.map((follower) => <FollowerPerson key={follower.id} {...follower} />)
                            : ''}
                    </Grid>
                </div>
            </div>
        </>
    );
}
