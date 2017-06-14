import * as types from './actionTypes';  
import profileApi from '../api/profileApi'; 

//get profiles list
//
//THUNK -enable to access dispatch as parametere after have been dispacthed
//thunk absorb all returned funbction dispatch so that reducer only recieve plain JSON objects, not dipatch thrown in redicer
export function loadProfiles() {  
  return function(dispatch) {
    return profileApi.getAllProfiles().then(profiles => {
      dispatch(loadProfilesSuccess(profiles));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadProfilesSuccess(profiles) {  
  return {type: types.LOAD_PROFILES_SUCCESS, profiles};
}