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
    fontFamily: 'Poppins-Medium',
    color: '#4E65F6',
    fontSize: 15,
    paddingTop: 20,
    textAlign: 'center',
  },

  inputLabel: {
    fontSize: 15,
    color: 'rgba(0,0,0,.6)',
    fontFamily: 'Poppins-Medium',
  },

  buttonMargin: {
    marginTop: 80,
  },

  input: {
    backgroundColor: 'transparent',
    width: '100%',
    fontSize: 15,
    padding: 10,
    paddingLeft: 20,
    color: 'rgba(0,0,0,.6)',
    fontFamily: 'Poppins-Medium',
  },

  innerContainer: {
    borderBottomWidth: 0,
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 25,
    width: '100%',
  },

  buttonContainer: {
    borderBottomWidth: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },

  button: {
    borderRadius: 5,
    padding: 10,
    width: '100%',
    backgroundColor: '#4E65F6',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 15,
    color: 'white',
    fontFamily: 'Poppins-Medium',
  },

  background: {
    backgroundColor: '#4E65F6',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
};
