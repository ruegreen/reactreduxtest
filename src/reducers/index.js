import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  courses    //using short hand property name from ES6, this could be done with long hand like courses: courses
});

export default rootReducer;
