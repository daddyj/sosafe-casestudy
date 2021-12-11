import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import React from "react";
import "./Notification.css";
import type { Notification as NotificationType } from "../../../store/store";
import Notification from "./_Notification";

export const InfoNotification: React.FC<NotificationType> = ({
  id,
  message,
}) => {
  return (
    <Notification
      id={id}
      title="Info"
      message={message ?? <></>}
      style={{
        border: `2px solid #0A9EF6`,
        backgroundColor: "lightblue",
      }}
      icon={<InfoOutlinedIcon htmlColor="rgb(10, 158, 246)" />}
    />
  );
};

export default React.memo(InfoNotification);
