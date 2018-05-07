import {createStore, applyMiddleware} from 'redux';  //Middle ware import is not needed in import
import rootReducer from '../reducers';
//This is not for production its just here to protect us from mutating state in reducers!  Remove for Prod
//import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState
    //applyMiddleware(reduxImmutableStateInvariant())                  //Remove for production
  );
}
