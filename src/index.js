
import React from 'react';
import ReactDOM from 'react-dom';
import MainScreen from './client/components/main-screen';
import { Provider } from 'react-redux'
import createStore from './client';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <MainScreen />
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
