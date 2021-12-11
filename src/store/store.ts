import React from "react";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer } from "./reducer";

type NotificationItem = {
  id: string;
  message?: React.ReactElement;
  hasBackdropClose?: boolean;
  type: "success" | "info" | "warning" | "error";
};

type ModalItem = {
  id: string;
  message?: React.ReactElement;
  content?: React.ReactElement;
  hasBackdropClose?: boolean;
  type: "modal";
};

export type Notification = NotificationItem | ModalItem;

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
