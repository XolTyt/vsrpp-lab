import { users } from './Users';
import {ADD_ITEM, DELETE_ITEM} from '../constants/ActionTypes';
const initialState = users();
const tab_reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, {
        id: action.id,
        firstname: action.firstname,
        lastname: action.lastname,
        email: action.email
      }]
    case DELETE_ITEM:
      return state.filter((user) => user.id !== action.id)
    default:
      return state;
  }
}



export { tab_reducer };