import * as types from '../actions/actionTypes';  
import initialState from './initialState'; 

//CHECK IF EW DATA COMEIS, IF NOT RETURN STATE INSTEAD
export default function profileReducer(state = initialState.profiles, action) {  
  switch(action.type) {
    case types.LOAD_PROFILES_SUCCESS:
      return action.profiles
    default: 
      return state;
  } 
}