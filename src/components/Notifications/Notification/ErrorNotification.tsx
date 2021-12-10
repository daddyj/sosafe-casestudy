import BlockOutlinedIcon from "@mui/icons-material/BlockOutlined";
import React from "react";
import type { Notification as NotificationType } from "../../../store/store";
import "./Notification.css";
import Notification from "./_Notification";

export const ErrorNotification: React.FC<NotificationType> = ({
  id,
  message,
}) => {
  return (
    <Notification
      id={id}
      title="Error"
      message={message}
      style={{
        border: `2px solid red`,
        backgroundColor: "#fc7e7e",
      }}
      icon={<BlockOutlinedIcon sx={{ color: "red" }} />}
    />
  );
};

export default React.memo(ErrorNotification);
