import { combineReducers } from "redux";
import { GlobalReducer } from "./slices/globalSlice";
import { CartReducer } from "./slices/cartSlice";

const rootReducer = combineReducers({
  GlobalReducer,
  CartReducer,
});

export default rootReducer;
