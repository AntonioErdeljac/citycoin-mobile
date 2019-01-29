import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Root as NativeRoot } from 'native-base';
import { StatusBar } from 'react-native';
import { createStore, applyMiddleware } from 'redux';

import Router from './router';
import { middleware, reducers } from './store';
import { setLocale, setIntlInstance } from './i18n';

const store = createStore(reducers, applyMiddleware(thunk, middleware()));

setIntlInstance(Intl);
setLocale();

const Root = () => (
  <Provider store={store}>
    <NativeRoot>
      <Router />
    </NativeRoot>
  </Provider>
);

export default Root;
