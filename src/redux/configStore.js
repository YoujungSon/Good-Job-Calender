import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "./modules/user";
import jobReducer from "./modules/job";
import postReducer from "./modules/post";
import scheduleReducer from "./modules/schedule";
// import rootReducer from './modules';
import dateReducer from "./modules/date";

const middlewares = [thunk];
const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
const rootReducer = combineReducers({
  user: userReducer,
  job: jobReducer,
  post: postReducer,
  schedule: scheduleReducer,
  date: dateReducer,
});

// 스토어를 만듭니다.
const store = createStore(rootReducer, enhancer);

export default store;
