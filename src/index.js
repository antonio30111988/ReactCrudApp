/*eslint-disable import/default */

//bable polyfill adjsutemnt for older browsersd
import 'babel-polyfill';  
import React from 'react';  
import { render } from 'react-dom';  

import configureStore from './store/configureStore'; 
//provider class pass stroe data to main parent component/s 
import { Provider } from 'react-redux';  

import { Router, browserHistory } from 'react-router';  
import routes from './routes'; 

const store = configureStore();

//dispatch load all Profiles action on index page load, and same time make request to api getProfiles....
store.dispatch(loadProfiles());

//forward routes object to router
//browserHistorty enables beautiful routes like /profiles/new or /profiles/5 for etc.
//
//Provider:pass dstore data inside Router area
render(  
	<Provider store={store}>
 <Router history={browserHistory} routes={routes} />
 </Provider>,
 document.getElementById('app')
);