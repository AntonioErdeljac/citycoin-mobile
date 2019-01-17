import { Dimensions } from 'react-native';

export default {
  container: {
    height: Dimensions.get('window').height,
  },

  card: {
    paddingBottom: 20,
    elevation: 0,
  },

  cardTitle: {
    fontFamily: 'WorkSans-Regular',
    fontSize: 18,
    paddingTop: 15,
    paddingBottom: 15,
  },

  cardImage: {
    flex: 1,
    height: 200,
    width: null,
  },

  cardItemSecondary: {
    marginTop: 10,
  },

  cardBodyText: {
    fontFamily: 'WorkSans-Light',
    fontSize: 16,
    marginTop: 20,
    lineHeight: 30,
  },
};
