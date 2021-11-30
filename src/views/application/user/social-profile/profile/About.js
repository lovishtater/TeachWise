import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';

// asset
import PublicIcon from '@material-ui/icons/Public';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

// style constant
const useStyles = makeStyles((theme) => ({
    about: {
        backgroundColor: 'white',
        padding: '24px',
        borderRadius: '12px',
        marginTop: '24px',
        border: '1px solid rgba(144, 202, 249, 0.46)'
    },
    headerAbout: {
        margin: '0px',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '600',
        fontSize: '1rem',
        lineHeight: '1.235',
        color: 'rgb(33, 33, 33)'
    },
    contentAbout: {
        margin: '0px',
        marginTop: '15px',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '400',
        fontSize: '0.875rem',
        lineHeight: '1.5em',
        letterSpacing: '0em',
        color: 'rgb(97, 97, 97)'
    },
    links: {},
    infolink: {
        width: '100%',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        marginBottom: '15px'
    },
    iconWeb: {
        marginRight: '10px',
        verticalAlign: 'bottom',
        fontSize: '1.5rem',
        color: 'rgb(103, 58, 183)'
    },
    iconIg: {
        marginRight: '10px',
        verticalAlign: 'bottom',
        fontSize: '1.5rem',
        color: 'rgb(216, 67, 21)'
    },
    iconFb: {
        marginRight: '10px',
        verticalAlign: 'bottom',
        fontSize: '1.5rem',
        color: 'rgb(33, 150, 243)'
    },
    iconLinkin: {
        marginRight: '10px',
        verticalAlign: 'bottom',
        fontSize: '1.5rem',
        color: 'color: rgb(33, 33, 33)'
    },
    tagA: {
        color: '#616161',
        width: '100%',
        textDecoration: 'none',
        '&:hover': {
            color: '#2196f3'
        }
    },
    tagHr: {
        marginTop: '16px',
        marginBottom: '16px',
        borderWidth: '0px 0px thin',
        borderStyle: 'solid',
        borderColor: 'rgb(238, 238, 238)',
        opacity: '1'
    }
}));

const About = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.about}>
                <h4 className={classes.headerAbout}>About</h4>
                <p className={classes.contentAbout}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
                    layout.
                </p>
                <hr className={classes.tagHr}></hr>
                <div>
                    <div className={classes.infolink}>
                        <PublicIcon className={classes.iconWeb} />
                        <a className={classes.tagA} target="blank" href="https://codedthemes.com/">
                            https://codedthemes.com/
                        </a>
                    </div>
                    <div className={classes.infolink}>
                        <InstagramIcon className={classes.iconIg} />
                        <a className={classes.tagA} target="blank" href="https://www.instagram.com/codedthemes/">
                            https://www.instagram.com/codedthemes/
                        </a>
                    </div>
                    <div className={classes.infolink}>
                        <FacebookIcon className={classes.iconFb} />
                        <a className={classes.tagA} target="blank" href="https://www.facebook.com/codedthemes">
                            https://www.facebook.com/codedthemes
                        </a>
                    </div>
                    <div className={classes.infolink}>
                        <LinkedInIcon className={classes.iconLinkin} />
                        <a className={classes.tagA} target="blank" href="https://www.linkedin.com/company/codedthemes/">
                            https://www.linkedin.com/company/codedthemes/
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default About;
