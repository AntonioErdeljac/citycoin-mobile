import { createStackNavigator } from 'react-navigation';

import View from './View';

const walletRouter = createStackNavigator({
  WalletView: {
    screen: View,
  },
}, {
  initialRouteName: 'WalletView',
  defaultNavigationOptions: {
    header: null,
  },
});

export default walletRouter;
