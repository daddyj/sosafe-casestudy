import type { StoreState } from "./store";
import type { Action } from "./actionTypes";
import * as actionTypes from "./actionTypes";

export const reducer = (
  state: StoreState = {
    notifications: [],
  },
  action: Action
): StoreState => {
  switch (action.type) {
    case actionTypes.ADD_SUCCESS_NOTIFICATION:
      return {
        ...state,
        notifications: [
          ...state.notifications,
          {
            id: `${action.type}-${state.notifications.length - 1}`,
            message: action?.message,
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
            message: action?.message,
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
            message: action?.message,
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
            message: action?.message,
            type: "error",
          },
        ],
      };
    case actionTypes.REMOVE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.filter(
          (notification) => notification.id !== action?.id
        ),
      };
    case actionTypes.ADD_MODAL:
      return {
        ...state,
        notifications: [
          ...state.notifications,
          {
            id: `${action.type}-${state.notifications.length - 1}`,
            type: "modal",
            content: action.content,
            hasBackdropClose: action.hasBackdropClose,
          },
        ],
      };
    default:
      return { ...state };
  }
};
