//import main reducers, redux store..
//
import {createStore, applyMiddleware} from 'redux';  
import rootReducer from '../reducers/rootReducer';  
import thunk from 'redux-thunk';

//CREATESTORE:
//connect root reducer with store
//root reducer collect all single reducres in one 
//
//thunk middleware -helps with organizing actions of reducers in sepacial way
export default function configureStore() {  
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
}