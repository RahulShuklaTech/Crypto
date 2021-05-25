import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { store } from "./redux/store"
import './index.css';
import Main from './components/Main';

ReactDOM.render(
  <Provider store = {store}>
   <Main />
   </Provider>,
  document.getElementById('root')
);

