import { combineReducers, createStore } from "redux";

import { configureStore } from "@reduxjs/toolkit";
import { generalReducer } from "../reducer/generalReducer";
import { unitsSlice } from "../reducer/unitsReducer";

const appRedux = combineReducers({
  unit: unitsSlice.reducer,
  loading: generalReducer,
});

const store = createStore(appRedux);

export default store;
