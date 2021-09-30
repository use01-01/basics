import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';
import { AppProvider } from './context';

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.querySelector('#root')
);
