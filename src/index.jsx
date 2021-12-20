import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppContainer from './AppContainer';
import store from './store';

import './index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/fonts.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
