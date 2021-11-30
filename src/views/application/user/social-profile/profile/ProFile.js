import React from 'react';

// material-ui
import { Grid } from '@material-ui/core';

import FriendAndFollow from '../profile/FriendAndFollow';
import About from '../profile/About';
import FormPost from '../profile/FormPost';
import Post from '../posts';

const ProFile = () => {
    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={4}>
                    <FriendAndFollow />
                    <About />
                </Grid>
                <Grid item xs={12} sm={12} md={8}>
                    <FormPost />
                    <Post />
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default ProFile;
