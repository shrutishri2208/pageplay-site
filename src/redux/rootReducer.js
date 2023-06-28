import { combineReducers } from "redux";
import pageReducer from "./page/pageReducer";

const rootReducer = combineReducers({
  activePage: pageReducer,
});

export default rootReducer;
