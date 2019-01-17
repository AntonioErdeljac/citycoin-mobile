import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Login from './Login';
import Register from './Register';

import { Icon } from '../common/components';

import { _t } from '../../i18n';

const authenticationRouter = createStackNavigator({
  Login: {
    screen: Login,
  },
  Register: {
    screen: Register,
  },
}, {
  initialRouteName: 'Login',
  defaultNavigationOptions: {
    header: null,
  },
});

authenticationRouter.navigationOptions = {
  drawerIcon: props => <Icon.FontAwesome {...props} name="newspaper-o" size={20} />,
  drawerLabel: _t('navigation.news'),
};

export default authenticationRouter;
