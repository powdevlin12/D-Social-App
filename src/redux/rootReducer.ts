import { combineReducers } from "@reduxjs/toolkit";
import appSlice from "./appSlide";

const rootReducer = combineReducers({
  app: appSlice,
});

export default rootReducer;
