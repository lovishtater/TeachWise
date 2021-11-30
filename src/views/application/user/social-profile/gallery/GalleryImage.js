import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';

// asset
import InsertInvitationTwoToneIcon from '@material-ui/icons/InsertInvitationTwoTone';
import MoreVertTwoToneIcon from '@material-ui/icons/MoreVertTwoTone';

// menu material-ui
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// gird material-ui
import Grid from '@material-ui/core/Grid';

// momemt
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
    btnEdit: {
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnIconEdit: {
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
    hoverTabs: {
        transition: 'all .5s',
        '&:hover': {
            backgroundColor: 'rgb(237, 231, 246)',
            color: 'rgb(94, 53, 177)'
        }
    },
    imageGallery: {
        width: '100%'
    },
    gallery: {
        border: ' 1px solid',
        background: '#fafafa',
        borderColor: '#f5f5f5',
        borderRadius: '10px',
        marginTop: '30px',
        marginLeft: '24px'
    },
    dateTime: {
        margin: '8px 0px 0px',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '400',
        lineHeight: '1.66',
        color: 'rgb(158, 158, 158)',
        fontSize: '12px'
    },
    iconCalender: {
        userSelect: 'none',
        width: '1em',
        height: '1em',
        display: 'inline-block',
        fill: 'currentcolor',
        flexShrink: '0',
        transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        marginRight: '4px',
        fontSize: '0.875rem',
        verticalAlign: 'text-top'
    },
    nameGallery: {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        marginTop: '0px',
        marginBottom: '5px',
        textOverflow: 'ellipsis',
        fontSize: '14px'
    },
    borderNameAndBtn: {
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '16px'
    },
    borderNameTime: {
        width: '70%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    }
}));

const GalleryImage = (gallery) => {
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
                <div className={classes.gallery}>
                    <div>
                        <img className={classes.imageGallery} alt="imageGallery" src={gallery.image} />
                    </div>
                    <div className={classes.borderNameAndBtn}>
                        <div className={classes.borderNameTime}>
                            <div>
                                <h5 className={classes.nameGallery}>{gallery.name}</h5>
                                <span className={classes.dateTime}>
                                    <InsertInvitationTwoToneIcon className={classes.iconCalender} />{' '}
                                    {moment(gallery.datetime).format('ddd ll')}
                                </span>
                            </div>
                        </div>
                        <div>
                            <div aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                <div className={classes.btnEdit}>
                                    <MoreVertTwoToneIcon className={classes.btnIconEdit} />
                                </div>
                            </div>
                            <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                                <MenuItem onClick={handleClose} className={classes.hoverTabs}>
                                    Remove Tag
                                </MenuItem>
                                <MenuItem onClick={handleClose} className={classes.hoverTabs}>
                                    Dowload
                                </MenuItem>
                                <MenuItem onClick={handleClose} className={classes.hoverTabs}>
                                    Make Profile Picture
                                </MenuItem>
                                <MenuItem onClick={handleClose} className={classes.hoverTabs}>
                                    Make Cover Photo
                                </MenuItem>
                                <MenuItem onClick={handleClose} className={classes.hoverTabs}>
                                    Find Support or Report Photo
                                </MenuItem>
                            </Menu>
                        </div>
                    </div>
                </div>
            </Grid>
        </>
    );
};

export default GalleryImage;
