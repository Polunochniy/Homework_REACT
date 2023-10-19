import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom/client';
import getStore from "./redux";
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


const GQL_SERVER_URL = 'http://shop-roles.node.ed.asmer.org.ua/graphql'

const root = ReactDOM.createRoot(document.getElementById('root'));
export const store = getStore()

const client = new ApolloClient({
  uri: GQL_SERVER_URL,
  cache: new InMemoryCache(),
});


root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);