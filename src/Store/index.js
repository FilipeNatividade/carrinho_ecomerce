import { createStore, combineReducers } from "redux";

import cartReducer from "./Module/Cart/reducer";

const reducers = combineReducers({
  cart: cartReducer,
});

const store = createStore(reducers);

export default store;
