import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

export const SuccessNotification: React.FC<{ message: string }> = ({
  message,
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0.5rem",
        margin: "0.25rem 0",
        border: `2px solid green`,
        backgroundColor: "lightgreen",
        borderRadius: "0.25rem",
        width: "100%",
      }}
    >
      <div
        style={{
          color: "black",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <div style={{ display: "flex" }}>
          <CheckCircleOutlineIcon sx={{ color: "green" }} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              margin: "0 10px",
            }}
          >
            <h3>Success</h3>
            <span>{message}</span>
          </div>
          <CloseIcon sx={{ color: "black" }} />
        </div>
      </div>
    </div>
  );
};
