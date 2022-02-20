import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/reset.css';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import createServer from './services/server';
import { Provider } from 'react-redux';
import { store } from './app/store';


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);


