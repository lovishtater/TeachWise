import React from 'react';
import SocialProfile from '../social-profile/profile';
import { Route } from 'react-router-dom';

const TemplateSocialProfile = (props) => {
    const { Component, ...restParams } = props;

    return (
        <Route
            {...restParams}
            render={(propsRoute) => {
                return (
                    <div>
                        <SocialProfile />
                        <Component {...propsRoute} />
                    </div>
                );
            }}
        />
    );
};

export default TemplateSocialProfile;
