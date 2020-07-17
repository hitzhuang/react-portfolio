import { combineReducers } from "redux";
import projectReducer from "./Project/reducer";

const rootReducer = combineReducers({
    project: projectReducer,
});

export default rootReducer;
