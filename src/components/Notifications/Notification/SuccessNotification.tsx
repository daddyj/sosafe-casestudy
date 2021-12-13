import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import React from "react";
import type { NotificationItem } from "../../../store/store";
import "./Notification.css";
import Notification from "./_Notification";

export const SuccessNotification: React.FC<NotificationItem> = ({
  id,
  message,
}) => {
  return (
    <Notification
      id={id}
      title="Success"
      message={message ?? <></>}
      style={{
        border: `2px solid green`,
        backgroundColor: "lightgreen",
      }}
      icon={<CheckCircleOutlineIcon sx={{ color: "green" }} />}
    />
  );
};

export default React.memo(SuccessNotification);
