import { combineReducers } from "redux";
import { createStore } from "redux";
import storeReducer from "./storeReducer";

const reducer = combineReducers({
    storeReducer
})

const store = createStore(reducer)

export default store