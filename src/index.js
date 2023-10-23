import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ApolloProvider } from '@apollo/client';
import getStore from './redux';
import App from './App';
import { client } from './api';
import { createBrowserHistory } from 'history';
import { ToastContainer } from 'react-toastify';
// import './../react-toastify/dist/ReactToastify.css';
import './../node_modules/react-toastify/dist/ReactToastify.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const history = createBrowserHistory();
export const store = getStore();


root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);