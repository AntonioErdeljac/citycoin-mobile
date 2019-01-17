import { Dimensions } from 'react-native';

export default {
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height,
  },

  indicator: {
    size: 80,
    borderWidth: 0,
    color: '#e74c3c',
    unfilledColor: '#fff',
  },

  image: { height: 80, width: 80 },
};
