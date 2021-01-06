import {LOG_IN} from '../constants/ActionTypes';
const auth = {
  logged: false
}

const auth_reducer = (state=auth, action) => {
  switch(action.type){
    case LOG_IN:
      return {
        ...state, 
        logged: action.payload
      }
    default:
      return state;
  }
}
export {auth_reducer};