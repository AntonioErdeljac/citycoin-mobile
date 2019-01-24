import { createStackNavigator } from 'react-navigation';

import View from './View';

const servicesRouter = createStackNavigator({
  ServicesView: {
    screen: View,
  },
}, {
  initialRouteName: 'ServicesView',
  defaultNavigationOptions: {
    header: null,
  },
});

servicesRouter.navigationOptions = {
  drawerLabel: () => null,
};

export default servicesRouter;
