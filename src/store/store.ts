import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer } from "./reducer";

export type Notification = {
  id: string;
  message: string;
  type: "success" | "info" | "warning" | "error";
};

export type StoreState = {
  notifications: Notification[];
};

const initialState: StoreState = {
  notifications: [],
};

const configureStore = (preloadedState: StoreState) => {
  const composedEnhancers = composeWithDevTools();

  const store = createStore(reducer, preloadedState, composedEnhancers);

  return store;
};

const store = configureStore(initialState);

export default store;
