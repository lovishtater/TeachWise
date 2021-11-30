import { Avatar } from '@material-ui/core';
import React from 'react';

// momemt
import moment from 'moment';

// icons MoreVertSharp
import MoreVertSharpIcon from '@material-ui/icons/MoreVertSharp';

// simple menu
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// material-ui
import { makeStyles } from '@material-ui/styles';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

// style constant
const useStyles = makeStyles((theme) => ({
    dots: {
        userSelect: 'none',
        display: 'inline-block',
        fill: 'currentcolor',
        flexShrink: 0,
        transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        fontSize: '1.5rem',
        width: '10px',
        height: '10px',
        opacity: '0.5',
        margin: '0px 5px'
    },
    nameStatus: {
        display: 'flex'
    },
    avataName: {
        display: 'flex'
    },
    avataNameEdit: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    name: {
        margin: '0px',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '500',
        fontSize: '0.875rem',
        lineHeight: '1.334',
        color: 'rgb(33, 33, 33)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '10px',
        marginLeft: '10px'
    },
    btnEditDelete: {
        cursor: 'pointer'
    },
    btnThereDots: {
        backgroundColor: '#ede7f6',
        color: '#5e35b1',
        height: '22px',
        width: '22px',
        transition: 'all .2s ease-in-out',
        borderRadius: '8px',
        '&:hover': {
            backgroundColor: '#5e35b1',
            color: 'white'
        }
    },
    btnCover: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    timePost: {
        margin: '0px',
        fontfamily: 'Roboto, sans-serif',
        fontweight: '400',
        fontsize: '0.75rem',
        lineheight: '1.66',
        color: 'rgb(158, 158, 158)',
        textalign: 'left',
        paddingLeft: '8px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));

const HeaderInfo = (post) => {
    const classes = useStyles();

    // simple menu
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            <div>
                {/* avatar, name, time, editButton */}
                <div className={classes.avataNameEdit}>
                    <div className={classes.avataName}>
                        <Avatar alt="avatar" src={post.avatar} />
                        <div className={classes.nameStatus}>
                            <div className={classes.name}>Lovish Tater</div>
                            <div className={classes.timePost}>
                                <FiberManualRecordIcon className={classes.dots} />
                                {moment(post.datetime).fromNow()}
                            </div>
                        </div>
                    </div>
                    <div className={classes.btnCover}>
                        <div className={classes.btnEditDelete} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            <MoreVertSharpIcon className={classes.btnThereDots} />
                        </div>
                        <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                            <MenuItem onClick={handleClose}>Edit</MenuItem>
                            <MenuItem onClick={handleClose}>Delete</MenuItem>
                        </Menu>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default HeaderInfo;
