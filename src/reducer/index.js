import { combineReducers, compose } from "redux";
import man from "./man";
import woman from "./woman";
// export the reducer
export default combineReducers({
  man,
  woman,
});

