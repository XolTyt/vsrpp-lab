import { auth_reducer } from './Auth_reducer';
import {tab_reducer} from './Tab_reducer';
import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from '../../thunk/reducers/items';
const allreducers = combineReducers({
   auth_reducer,
   tab_reducer,
   items,
    itemsHasErrored,
    itemsIsLoading
});
export default allreducers;