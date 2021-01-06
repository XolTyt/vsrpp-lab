import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import './components/index.css';
import Ground_app from './components/Ground_app';
import * as serviceWorker from './components/serviceWorker';
import allreducers from '../src/redux/reducers'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
const store = createStore(allreducers, applyMiddleware(thunk));
render((
  <Provider store={store} >      
    <BrowserRouter> 
      <Ground_app />    
    </BrowserRouter>    
  </Provider>
  
  
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
