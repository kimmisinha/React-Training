import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import BookReducer from "./BookReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  BookReducer,
  composeEnhancers(applyMiddleware(thunk))
);

console.log("Initial State", store.getState());

export default store;
