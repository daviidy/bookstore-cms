import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min';
import 'bootstrap/dist/js/bootstrap.min';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import combineReducers from './reducers/index';

const state = {
  books: [
    {
      id: Math.random(),
      title: 'Limitless',
      category: 'Learning',
    },

    {
      id: Math.random(),
      title: 'Scala fundamentals',
      category: 'Learning',
    },

    {
      id: Math.random(),
      title: 'Harry potter',
      category: 'Kids',
    },
  ],

  filter: 'All',
};

const store = createStore(combineReducers, state);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    ,

  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
