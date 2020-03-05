import 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: "http://localhost:3000",
});

console.log('index::process.env.MY_ENV_VARIABLE -> ', process.env.MY_ENV_VARIABLE);

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, document.getElementById('root'));
