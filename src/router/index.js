import { createAppContainer, createDrawerNavigator } from 'react-navigation';

import { Posts, Drawer, SplashScreen } from '../components';

const Router = createDrawerNavigator({
  SplashScreen: {
    screen: SplashScreen,
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
      fontFamily: 'WorkSans-Light',
      fontWeight: 'normal',
    },
  },
  contentComponent: Drawer,
});

export default createAppContainer(Router);
