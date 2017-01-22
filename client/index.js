import React from 'react';
import { render } from 'react-dom';
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

const renderRoot = () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  );
};

// Render root application component when authentication data is in the store
userActions.initAuth(store.dispatch)
  .then(() => renderRoot())
  .catch(error => console.log(error)); // eslint-disable-line no-console

// HMR Configuration

if (module.hot) {
  module.hot.accept('./containers', () => {
    const NextApp = require('./containers').App; // eslint-disable-line global-require

    render(
      <Provider store={store}>
        <NextApp />
      </Provider>,
      document.getElementById('app')
    );
  });
}

export default store;
