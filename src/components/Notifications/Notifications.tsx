import React from "react";
import { useSelector } from "react-redux";
import type { Notification } from "../../store/store";
import { StoreState } from "../../store/store";
import Modal from "./Modal/Modal";
import ErrorNotification from "./Notification/ErrorNotification";
import InfoNotification from "./Notification/InfoNotification";
import SuccessNotification from "./Notification/SuccessNotification";
import WarningNotification from "./Notification/WarningNotification";
import "./Notifications.css";

export const Notifications: React.FC = () => {
  const notifications = useSelector((state: StoreState) => state.notifications);

  const getNotificationByType = (notification: Notification) => {
    switch (notification.type) {
      case "success":
        return <SuccessNotification {...notification} />;
      case "info":
        return <InfoNotification {...notification} />;
      case "warning":
        return <WarningNotification {...notification} />;
      case "error":
        return <ErrorNotification {...notification} />;
      case "modal":
        return <Modal {...notification} />;
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
