import { createStackNavigator } from 'react-navigation';

import Form from './Form';
import View from './View';

const walletsRouter = createStackNavigator({
  WalletView: {
    screen: View,
  },
  WalletForm: {
    screen: Form,
  },
}, {
  initialRouteName: 'WalletView',
  defaultNavigationOptions: {
    header: null,
  },
});

export default walletsRouter;
