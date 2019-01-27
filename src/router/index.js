import { createAppContainer, createDrawerNavigator } from 'react-navigation';

import { Authentication, Dashboard, Drawer, SplashScreen, Services, Subscriptions } from '../components';

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
  Services: {
    screen: Services,
  },
  Subscriptions: {
    screen: Subscriptions,
  },
}, {
  drawerBackgroundColor: '#fff',
  contentOptions: {
    inactiveTintColor: 'rgba(0,0,0,.6)',
    activeTintColor: '#4E65F6',
    activeBackgroundColor: 'rgba(0,0,0,.05)',
    labelStyle: {
      fontFamily: 'Poppins-Medium',
      fontWeight: 'bold',
      fontSize: 20,
    },
  },
  contentComponent: Drawer,
});

export default createAppContainer(Router);
