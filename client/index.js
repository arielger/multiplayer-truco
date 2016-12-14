import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { App } from './containers';
import reducer from './reducers';
import { userActions } from './actions';

/* eslint-disable no-underscore-dangle */
// From redux-dev-tools extension github
// https://github.com/zalmoxisus/redux-devtools-extension#2-use-with-redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, {}, composeEnhancers(
  applyMiddleware(thunk)
));
/* eslint-enable */

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  );
});

setTimeout(() => {
  store.dispatch(userActions.listenToAuth());
  store.dispatch(userActions.signInAnonymously());
});

export default store;
