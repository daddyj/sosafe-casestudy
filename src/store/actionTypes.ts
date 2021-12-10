export const ADD_SUCCESS_NOTIFICATION = "ADD_SUCCESS_NOTIFICATION";
export const ADD_INFO_NOTIFICATION = "ADD_INFO_NOTIFICATION";
export const ADD_WARNING_NOTIFICATION = "ADD_WARNING_NOTIFICATION";
export const ADD_ERROR_NOTIFICATION = "ADD_ERROR_NOTIFICATION";
export const REMOVE_NOTIFICATION = "REMOVE_NOTIFICATION";

export type ActionTypes =
  | "ADD_SUCCESS_NOTIFICATION"
  | "ADD_INFO_NOTIFICATION"
  | "ADD_WARNING_NOTIFICATION"
  | "ADD_ERROR_NOTIFICATION"
  | "REMOVE_NOTIFICATION";

export type Action = {
  id?: string;
  message: string;
  type: ActionTypes;
};
