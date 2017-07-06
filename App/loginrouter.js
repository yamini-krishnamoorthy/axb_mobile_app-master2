import React from 'react';
import { StackNavigator, DrawerNavigator, NavigationActions } from 'react-navigation';

import Login from './screens/login';
import Signup from './screens/signup';

export const LoginPage = StackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Login',
        },
    },
    Signup: {
        screen: Signup,
        navigationOptions: {
            title: 'Signup',
        }
    }
},
    {
        mode: 'modal',
        headerMode: 'none',
    });