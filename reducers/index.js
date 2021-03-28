import medicalReducer from './medicalReducer';
import policeReducer from './policeReducer';
import fireReducer from './fireReducer.js';
import {combineReducers} from 'redux';


const allReducers= combineReducers({
    medicalReducer: medicalReducer,
    policeReducer: policeReducer,
    fireReducer: fireReducer
})

export default allReducers;