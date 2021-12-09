import React from "react";
import { useSelector } from "react-redux";
import { StoreState } from "../../store/store";
import "./Notifications.css";
import type { Notification } from "../../store/store";
import { SuccessNotification } from "./Notification/SuccessNotification";
import { InfoNotification } from "./Notification/InfoNotification";
import { ErrorNotification } from "./Notification/ErrorNotification";
import { WarningNotification } from "./Notification/WarningNotification";

export const Notifications: React.FC = () => {
  const notifications = useSelector((state: StoreState) => state.notifications);

  const getNotificationByType = (notification: Notification) => {
    switch (notification.type) {
      case "success":
        return <SuccessNotification message={notification.message} />;
      case "info":
        return <InfoNotification message="test info" />;
      case "warning":
        return <WarningNotification message="test info" />;
      case "error":
        return <ErrorNotification message="test error" />;
      default:
        return <></>;
    }
  };

  return (
    <div className="notifications-wrapper">
      {notifications.map((notification, index) => (
        <React.Fragment key={`${notification.type}-${index}`}>
          {getNotificationByType(notification)}
        </React.Fragment>
      ))}
    </div>
  );
};
