import React from 'react';
import { createStackNavigator } from 'react-navigation';

import List from './List';
import View from './View';

import styles from '../common/styles';
import { Icon } from '../common/components';

import { _t } from '../../i18n';

const postsRouter = createStackNavigator({
  PostsList: {
    screen: List,
  },
  PostsView: {
    screen: View,
  },
}, {
  initialRouteName: 'PostsList',
  defaultNavigationOptions: {
    headerTitleStyle: styles.headerTitleStyle,
    headerBackTitleStyle: styles.headerTitleStyle,
    title: _t('navigation.news'),
  },
});

postsRouter.navigationOptions = {
  drawerIcon: props => <Icon.FontAwesome {...props} name="newspaper-o" size={20} />,
  drawerLabel: _t('navigation.news'),
};

export default postsRouter;
