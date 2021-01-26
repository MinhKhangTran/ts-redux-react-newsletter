import { combineReducers } from "redux";
import { postReducer } from "./postReducer";
import { userReducer } from "./userReducer";

export const reducer = combineReducers({
  postReducer,
  userReducer,
});

// type
export type RootState = ReturnType<typeof reducer>;
