import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ApolloProvider } from '@apollo/client';
import getStore from './redux';
import App from './App';
import { client } from './api';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const store = getStore();

root.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
  </ApolloProvider>
);
