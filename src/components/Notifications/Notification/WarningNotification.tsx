import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import React from "react";
import type { NotificationItem } from "../../../store/store";
import "./Notification.css";
import Notification from "./_Notification";

export const WarningNotification: React.FC<NotificationItem> = ({
  id,
  message,
}) => {
  return (
    <Notification
      id={id}
      title="Warning"
      message={message ?? <></>}
      style={{
        border: `2px solid orange`,
        backgroundColor: "#f9dc84",
      }}
      icon={<InfoOutlinedIcon htmlColor="orange" />}
    />
  );
};

export default React.memo(WarningNotification);
