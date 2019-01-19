import { Dimensions } from 'react-native';

export default {
  center: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height,
  },

  background: {
    backgroundColor: '#4E65F6',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
};
