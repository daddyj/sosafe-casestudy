import * as actionTypes from "./actionTypes";

export const addSuccessNotification = (message: string) => ({
  type: actionTypes.ADD_SUCCESS_NOTIFICATION,
  message,
});

export const addInfoNotification = (message: string) => ({
  type: actionTypes.ADD_INFO_NOTIFICATION,
  message,
});

export const addWarningNotification = (message: string) => ({
  type: actionTypes.ADD_WARNING_NOTIFICATION,
  message,
});
export const addErrorNotification = (message: string) => ({
  type: actionTypes.ADD_ERROR_NOTIFICATION,
  message,
});
