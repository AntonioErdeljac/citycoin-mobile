export default {
  scrollView: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    flexGrow: 1,
  },

  header: {
    height: 230,
    backgroundColor: 'red',
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },

  innerContainer: {
    flex: 1,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    height: 50,
    width: 130,
  },

  signetLogo: {
    marginTop: 15,
    height: 19,
    width: 49,
  },

  logoShimmer: {
    marginTop: 30,
  },

  text: {
    fontFamily: 'Poppins-ExtraLight',
    fontWeight: '400',
    color: 'white',
    fontSize: 20,
  },

  safeAreaView: {
    backgroundColor: 'white',
  },

  footer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
  },

  flexEnd: {
    alignSelf: 'flex-end',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 20,
  },

  footerText: {
    fontSize: 11,
    fontFamily: 'Poppins-Light',
    fontWeight: 'normal',
    color: 'rgba(0,0,0,.8)',
  },
};
