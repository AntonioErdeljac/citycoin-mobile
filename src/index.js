import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Root as NativeRoot } from 'native-base';
import { createStore, applyMiddleware } from 'redux';

import Router from './router';
import { middleware, reducers } from './store';
import { setLocale, setIntlInstance } from './i18n';

const store = createStore(reducers, applyMiddleware(thunk, middleware()));

setIntlInstance(Intl);
setLocale();

class Root extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={store}>
        <NativeRoot>
          <Router />
        </NativeRoot>
      </Provider>
    );
  }
}

export default Root;
