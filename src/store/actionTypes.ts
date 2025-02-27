import React from "react";

export const ADD_SUCCESS_NOTIFICATION = "ADD_SUCCESS_NOTIFICATION";
export const ADD_INFO_NOTIFICATION = "ADD_INFO_NOTIFICATION";
export const ADD_WARNING_NOTIFICATION = "ADD_WARNING_NOTIFICATION";
export const ADD_ERROR_NOTIFICATION = "ADD_ERROR_NOTIFICATION";
export const REMOVE_NOTIFICATION = "REMOVE_NOTIFICATION";
export const ADD_MODAL = "ADD_MODAL";

export type NotificationActionTypes =
  | "ADD_SUCCESS_NOTIFICATION"
  | "ADD_INFO_NOTIFICATION"
  | "ADD_WARNING_NOTIFICATION"
  | "ADD_ERROR_NOTIFICATION"
  | "REMOVE_NOTIFICATION";

export type NotificationAction = {
  id?: string;
  message: React.ReactElement;
  type: NotificationActionTypes;
};

export type ModalAction = {
  id?: string;
  type: "ADD_MODAL";
  content: React.ReactElement;
  hasBackdropClose: boolean;
};

export type Action = NotificationAction | ModalAction;
