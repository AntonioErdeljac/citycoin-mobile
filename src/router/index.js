import { createAppContainer, createDrawerNavigator } from 'react-navigation';

import { Authentication, Dashboard, Posts, Drawer, SplashScreen } from '../components';

const Router = createDrawerNavigator({
  SplashScreen: {
    screen: SplashScreen,
  },
  Authentication: {
    screen: Authentication,
  },
  Dashboard: {
    screen: Dashboard,
  },
  Posts: {
    screen: Posts,
  },
}, {
  drawerBackgroundColor: '#fff',
  contentOptions: {
    inactiveTintColor: 'rgba(0,0,0,.8)',
    activeTintColor: '#f03434',
    activeBackgroundColor: 'rgba(0,0,0,.05)',
    labelStyle: {
      fontFamily: 'Poppins-Light',
      fontWeight: 'normal',
    },
  },
  contentComponent: Drawer,
});

export default createAppContainer(Router);
