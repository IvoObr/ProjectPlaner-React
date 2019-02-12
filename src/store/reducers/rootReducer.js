import {authReducer as auth} from './authReducer'
import {projectReducer as project} from './projectReducer'
import {combineReducers} from "redux-loop";

const rootReducer = combineReducers({auth, project});

export default rootReducer;