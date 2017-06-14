//import main router npm packages and ocomponenets
import React from 'react';   
import { Route, IndexRoute } from 'react-router';  
import App from './components/App';  
import HomePage from './components/home/HomePage';  
import UsersPage from './components/users/ProfilesPage';  
import UserPage from './components/users/ProfilePage';


export default (  
	//parent componenet with childrens inside
  <Route path="/" component={App}>
  //set start route to hompeage
    <IndexRoute component={HomePage} />
    <Route path="/profiles" component={ProfilesPage} />
  </Route> 
);