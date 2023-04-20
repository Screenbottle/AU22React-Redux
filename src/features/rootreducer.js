import { combineReducers } from "redux";
import { reducer as counterReducer, actions as counterActions } from "./counter";
import { reducer as profileReducer, actions as profileActions } from "./profile";

const rootReducer = combineReducers({
    counter: counterReducer,
    profile: profileReducer,
})

export { rootReducer };