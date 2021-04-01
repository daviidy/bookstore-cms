import { CHANGE_FILTER } from '../actions/actionsTypes';

const filter = (state = 'All', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default filter;
