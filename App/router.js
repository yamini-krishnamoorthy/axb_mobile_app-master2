import React from 'react';
import { StackNavigator, DrawerNavigator, NavigationActions } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import DashboardScreen from './screens/DashboardScreen';
import ActivitiesScreen from './screens/ActivitiesScreen';
import DailyGymScreen from './screens/DailyGymScreen';
import MindfulnessScreen from './screens/MindfulnessScreen';
import BodyMapScreen from './screens/BodyMapScreen';
import BackScoreScreen from './screens/BackScoreScreen';
import ProgressScreen from './screens/ProgressScreen';
import CommunityScreen from './screens/CommunityScreen';

import Sidebar from './screens/Sidebar';

import HelpScreen from './screens/HelpScreen';
import AccountScreen from './screens/AccountScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import SoundScreen from './screens/SoundScreen';
import PrivacyScreen from './screens/PrivacyScreen';
import TCScreen from './screens/TCScreen';
import ContactUsScreen from './screens/ContactUsScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import Login from './screens/login';
import Signup from './screens/signup';
import Main from '../App/main';
import Index from '../App/index';

export const NavigationMainStack = StackNavigator({
  Home: { screen: HomeScreen },
  Dashboard: { screen: DashboardScreen },
  Activities: { screen: ActivitiesScreen },
  BodyMap: { screen: BodyMapScreen },
  BackScore: { screen: BackScoreScreen },
  Progress: { screen: ProgressScreen },
  Community: { screen: CommunityScreen },
  Privacy: { screen: PrivacyScreen },
}, {
    headerMode: 'none',
  });

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
  },
  Main: {
    screen: Main,
    navigationOptions: {
      title: 'Main',
    }
  }
},
  {
    mode: 'modal',
    headerMode: 'none',
  });


export const Root = DrawerNavigator({
  NavigationMain: { screen: NavigationMainStack },
  Help: { screen: HelpScreen },
  Account: { screen: AccountScreen },
  Notifications: { screen: NotificationsScreen },
  Sound: { screen: SoundScreen },
  Privacy: { screen: PrivacyScreen },
  TC: { screen: TCScreen },
  ContactUs: { screen: ContactUsScreen },
  EditProfile: { screen: EditProfileScreen },


}, {
    headerMode: 'none',
    drawerWidth: 250,
    contentComponent: props => <Sidebar {...props} />
  });
