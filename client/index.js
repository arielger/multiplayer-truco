import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './containers';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    React.createElement(App),
    document.getElementById('app')
  );
});
