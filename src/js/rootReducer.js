import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
// import { devToolsEnhancer } from "redux-devtools-extension";

// reducers
import viewReducer from "./views/reducer";
import apiReducer from "./api/reducer";
import audioReducer from "./audio/reducer";
import navReducer from "./components/bar/reducer";

// combine reducers
const rootReducer = combineReducers({
  viewState: viewReducer,
  apiState: apiReducer,
  audioState: audioReducer,
  navState: navReducer
});

// const store = createStore(
//   rootReducer,
//   compose(
//     devToolsEnhancer(),
//     applyMiddleware(thunkMiddleware)
//   )
// );

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
