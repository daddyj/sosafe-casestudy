import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import "./Notification.css";

export const WarningNotification: React.FC<{ message: string }> = ({
  message,
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0.5rem",
        margin: "0.25rem 0",
        border: `2px solid orange`,
        borderRadius: "0.25rem",
        backgroundColor: "#f9dc84",
        width: "100%",
      }}
    >
      <div
        style={{
          color: "black",
          display: "flex",
          flex: 1,
        }}
      >
        <InfoOutlinedIcon htmlColor="orange" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            margin: "0 10px",
          }}
        >
          <h3>Warning</h3>
          <span>{message}</span>
        </div>
        <CloseIcon sx={{ color: "black" }} />
      </div>
    </div>
  );
};

export default React.memo(WarningNotification);
