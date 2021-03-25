const bookReducer = (state=[], action) => {
  switch(action.type) {
    case CREATE_BOOK:
      return [...state, action.book] 
    case REMOVE_BOOK:
      return state.filter(book => book !== action.book)           
    default:
      state    
  }    
}
 
export default bookReducer;