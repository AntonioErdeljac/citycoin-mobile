import React from 'react';
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import { Authentication, Dashboard, SplashScreen, Services, Subscriptions, Wallets, Cities } from '../components';
import { Icon } from '../components/common/components';

const TabRouter = createBottomTabNavigator({
  Dashboard: {
    screen: Dashboard,
  },
  Wallet: {
    screen: Wallets,
  },
  Subscriptions: {
    screen: Subscriptions,
  },
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      const { routeName } = navigation.state;
      if (routeName === 'Dashboard') {
        return <Icon.Entypo name="shop" size={25} color={tintColor} />;
      }

      if (routeName === 'Subscriptions') {
        return <Icon.FontAwesome name="ticket" size={25} color={tintColor} />;
      }

      if (routeName === 'Wallet') {
        return <Icon.Entypo name="wallet" size={25} color={tintColor} />;
      }

      return null;
    },
  }),
  tabBarOptions: {
    showLabel: false,
    activeTintColor: '#4E65F6',
    inactiveTintColor: 'gray',
  },
});

const MainRouter = createStackNavigator({
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: {
      header: null,
    },
  },
  Services: {
    screen: Services,
    navigationOptions: {
      header: null,
    },
  },
  Authentication: {
    screen: Authentication,
    navigationOptions: {
      header: null,
    },
  },
  Cities: {
    screen: Cities,
    navigationOptions: {
      header: null,
    },
  },
  TabRouter: {
    screen: TabRouter,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(MainRouter);
