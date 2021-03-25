import { createStore } from 'redux';
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
  ],
};

export default createStore(combineReducers, state);
