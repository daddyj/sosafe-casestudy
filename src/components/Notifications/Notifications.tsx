import React from "react";
import { useSelector } from "react-redux";
import { StoreState } from "../../store/store";
import "./Notifications.css";
import type { Notification } from "../../store/store";
import SuccessNotification from "./Notification/SuccessNotification";
import InfoNotification from "./Notification/InfoNotification";
import ErrorNotification from "./Notification/ErrorNotification";
import WarningNotification from "./Notification/WarningNotification";

export const Notifications: React.FC = () => {
  const notifications = useSelector((state: StoreState) => state.notifications);

  const getNotificationByType = (notification: Notification) => {
    const { message, id } = notification;

    switch (notification.type) {
      case "success":
        return (
          <SuccessNotification
            id={id}
            message={message}
            type={notification.type}
          />
        );
      case "info":
        return (
          <InfoNotification
            id={id}
            message={message}
            type={notification.type}
          />
        );
      case "warning":
        return (
          <WarningNotification
            id={id}
            message={message}
            type={notification.type}
          />
        );
      case "error":
        return (
          <ErrorNotification
            id={id}
            message={message}
            type={notification.type}
          />
        );
      default:
        return <></>;
    }
  };

  return (
    <div className="notifications-wrapper">
      {notifications.map((notification) => (
        <React.Fragment key={notification.id}>
          {getNotificationByType(notification)}
        </React.Fragment>
      ))}
    </div>
  );
};
