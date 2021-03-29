import { CHANGE_FILTER } from "../actions/actionsTypes"

export const filterReducer = (state = 'All', action) => {
  switch(action.type){
    case CHANGE_FILTER:
      return action.filter      
    default:
      return state        
  }
}