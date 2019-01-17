import { Dimensions } from 'react-native';

export default {
  item: {
    width: '100%',
    marginLeft: 0,
    marginBottom: 10,
    borderBottomWidth: 1,
  },

  label: {
    paddingLeft: 17,
    color: 'gray',
  },

  input: {
    width: Dimensions.get('window').width - 10,
    paddingLeft: 17,
    marginBottom: 10,
  },
};
