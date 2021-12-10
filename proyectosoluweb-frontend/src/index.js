import React from 'react';
import {ApolloProvider} from '@apollo/client';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import client from './Apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>,
 
  document.getElementById('root')
);

