import { Dimensions } from 'react-native';

export default {
  image: {
    height: 50,
    width: 50,
    marginRight: 10,
  },

  titleContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 40,
  },

  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },

  title: {
    fontFamily: 'Poppins-Medium',
    color: 'white',
    fontSize: 40,
  },

  subtitle: {
    fontFamily: 'Poppins-Light',
    color: 'white',
    fontSize: 20,
  },

  input: {
    backgroundColor: 'transparent',
    width: '100%',
    fontSize: 15,
    color: 'white',
    fontFamily: 'Poppins-Light',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    padding: 5,
  },

  innerContainer: {
    marginTop: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },

  button: {
    borderRadius: 10,
    padding: 10,
    width: '100%',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 15,
    color: '#4E65F6',
    fontFamily: 'Poppins-Medium',
  },

  background: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
};
