import React from 'react';
import { createStackNavigator } from 'react-navigation';

import List from './List';
import View from './View';

import { Icon } from '../common/components';

import { _t } from '../../i18n';

const subscriptionsRouter = createStackNavigator({
  SubscriptionsList: {
    screen: List,
  },
  SubscriptionsView: {
    screen: View,
  },
}, {
  initialRouteName: 'SubscriptionsList',
  defaultNavigationOptions: {
    header: null,
  },
});

subscriptionsRouter.navigationOptions = {
  drawerLabel: () => _t('navigation.subscriptions'),
  drawerIcon: props => <Icon.FontAwesome name="ticket" size={25} {...props} />,
};

export default subscriptionsRouter;
