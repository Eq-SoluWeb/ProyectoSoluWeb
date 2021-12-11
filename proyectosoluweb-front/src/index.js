import React from 'react';
import {ApolloProvider} from '@apollo/client';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
<<<<<<< HEAD

ReactDOM.render(
      <App />,
  document.getElementById('root')
);
=======
import client from './Apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>,
 
  document.getElementById('root')
);

>>>>>>> f01e3382d4c8bf5c2b4b15b45d9a6011d1498654
