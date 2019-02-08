import authReducer from './authReducer'
import {projectReducer as project} from './projectReducer'
import {combineReducers} from "redux-loop";

const rootReducer = combineReducers({
    auth: authReducer,
    project
});

export default rootReducer;