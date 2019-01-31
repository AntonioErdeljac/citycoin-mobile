import { createStackNavigator } from 'react-navigation';

import List from './List';

const citiesRouter = createStackNavigator({
  CitiesList: {
    screen: List,
  },
}, {
  initialRouteName: 'CitiesList',
  defaultNavigationOptions: {
    header: null,
  },
});

export default citiesRouter;
