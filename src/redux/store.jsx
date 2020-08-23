import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleWare from "redux-thunk";
import foodsReducer from "./cats-reducers";

let redusers = combineReducers({
  foodsBlock: foodsReducer
})

const store = createStore(redusers, applyMiddleware(thunkMiddleWare));
window.store = store;

export default store;
