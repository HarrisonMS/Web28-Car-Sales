import React from 'react';
import { Provider }  from 'react-redux'
import { store } from './reducers/index'
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
  <App />  
</Provider>,
rootElement);
