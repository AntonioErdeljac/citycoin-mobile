import { Dimensions } from 'react-native';

export default {
  loading: {
    flex: 1,
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

  text: {
    fontFamily: 'WorkSans-Regular', fontWeight: 'normal', color: 'gray', fontSize: 20, marginTop: 15,
  },

  sad: {
    fontFamily: 'WorkSans-Regular', fontWeight: 'normal', color: 'gray', fontSize: 40,
  },
};
