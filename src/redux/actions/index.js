import * as types from '../constants/ActionTypes'
let maxId = 2;

export const add_user = (firstname, lastname, email) => {
  return{
    type:types.ADD_ITEM,
    id: ++maxId,
    firstname, 
    lastname, 
    email
  }
}

export const delete_user = (id) => {
  return{
    type: types.DELETE_ITEM,
    id
  }
}

export const logIn = (logged) => {
  return{
    type: types.LOG_IN,
    payload: logged
  }
}