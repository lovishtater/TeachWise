import React, { lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

// project imports
import MainLayout from './../layout/MainLayout';
import Loadable from '../ui-component/Loadable';

// template application
import TemplateSocialProfile from '../views/application/user/social-profile';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('../views/dashboard/Default')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('../views/sample-page')));

// application routing
const ProFile = Loadable(lazy(() => import('../views/application/user/social-profile/profile/ProFile')));
const Follower = Loadable(lazy(() => import('../views/application/user/social-profile/followers')));
const Friend = Loadable(lazy(() => import('../views/application/user/social-profile/friends')));
const Gallery = Loadable(lazy(() => import('../views/application/user/social-profile/gallery')));
const FriendRequest = Loadable(lazy(() => import('../views/application/user/social-profile/friend-request')));

//-----------------------|| MAIN ROUTING ||-----------------------//

const MainRoutes = () => {
    const location = useLocation();

    return (
        <Route
            path={[
                '/dashboard/default',

                '/utils/util-typography',
                '/utils/util-color',
                '/utils/util-shadow',

                '/icons/tabler-icons',
                '/icons/material-icons',
                '/sample-page',

                '/user/social-profile/posts',
                '/user/social-profile/follower',

                '/user/social-profile/follower',
                '/user/social-profile/friends',
                '/user/social-profile/gallery',
                '/user/social-profile/friend-request',

                '/user/social-profile/friends',
                '/user/social-profile/gallery',
                '/user/social-profile/friend-request',
            ]}
        >
            <MainLayout>
                <Switch location={location} key={location.pathname}>
                    <Route path="/dashboard/default" component={DashboardDefault} />
                    
                    {/* Change your path */}
                    <TemplateSocialProfile path="/user/social-profile/posts" Component={ProFile} />
                    <TemplateSocialProfile path="/user/social-profile/follower" Component={Follower} />
                    <TemplateSocialProfile path="/user/social-profile/friends" Component={Friend} />
                    <TemplateSocialProfile path="/user/social-profile/gallery" Component={Gallery} />
                    <TemplateSocialProfile path="/user/social-profile/friend-request" Component={FriendRequest} />

                    
                    {/* <Route path="/user/social-profile/posts" component={AppUserSocialProfile} /> */}
                    {/* Change your path */}
                    <TemplateSocialProfile path="/user/social-profile/posts" Component={ProFile} />
                    <TemplateSocialProfile path="/user/social-profile/follower" Component={Follower} />
                </Switch>
            </MainLayout>
        </Route>
    );
};

export default MainRoutes;
