import type { StoreState } from "./store";
import type { Action } from "./actionTypes";
import * as actionTypes from "./actionTypes";

export const reducer = (
  state: StoreState = {
    notifications: [],
  },
  action: Action
): StoreState => {
  const { message } = action;

  switch (action.type) {
    case actionTypes.ADD_SUCCESS_NOTIFICATION:
      return {
        ...state,
        notifications: [
          ...state.notifications,
          {
            id: `${action.type}-${state.notifications.length - 1}`,
            message,
            type: "success",
          },
        ],
      };
    case actionTypes.ADD_INFO_NOTIFICATION:
      return {
        ...state,
        notifications: [
          ...state.notifications,
          {
            id: `${action.type}-${state.notifications.length - 1}`,
            message,
            type: "info",
          },
        ],
      };
    case actionTypes.ADD_WARNING_NOTIFICATION:
      return {
        ...state,
        notifications: [
          ...state.notifications,
          {
            id: `${action.type}-${state.notifications.length - 1}`,
            message,
            type: "warning",
          },
        ],
      };
    case actionTypes.ADD_ERROR_NOTIFICATION:
      return {
        ...state,
        notifications: [
          ...state.notifications,
          {
            id: `${action.type}-${state.notifications.length - 1}`,
            message,
            type: "error",
          },
        ],
      };
    case actionTypes.REMOVE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.filter(
          (notification) => notification.id !== action.id
        ),
      };
    default:
      return { ...state };
  }
};
