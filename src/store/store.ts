import { createStore } from "redux";
import { reducer } from "./reducer";

export type Notification = {
  message: string;
  type: "success" | "info" | "warning" | "error";
};

export type StoreState = {
  notifications: Notification[];
};

const initialState: StoreState = {
  notifications: [],
};

const store = createStore(reducer, initialState);

export default store;
