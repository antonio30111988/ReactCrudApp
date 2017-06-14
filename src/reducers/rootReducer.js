/* We'll use Redux's combineReducers function. 
This is a helper function that turns an object whose values 
are different reducing functions into a single reducing function 
you can pass to createStore.
*/

import {combineReducers} from 'redux';  
import profiles from './profileReducer'; 

const rootReducer = combineReducers({  
  // short hand property names instead profiles:profiles
  profiles
})

export default rootReducer;  