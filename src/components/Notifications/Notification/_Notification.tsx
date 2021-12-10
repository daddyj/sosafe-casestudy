import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { useDispatch } from "react-redux";
import { removeNotification } from "../../../store/actionCreators";
import "./Notification.css";

export const Notification: React.FC<{
  title: string;
  message: string;
  id: string;
  style: any;
  icon: React.ReactElement;
}> = ({ id, title, message, style, icon }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(removeNotification(id));
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0.5rem",
        margin: "0.25rem 0",
        borderRadius: "0.25rem",
        width: "100%",
        ...style,
      }}
    >
      <div
        style={{
          color: "black",
          display: "flex",
          flex: 1,
        }}
      >
        {icon}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            margin: "0 10px",
          }}
        >
          <h3>{title}</h3>
          <span>{message}</span>
        </div>
        <CloseIcon sx={{ color: "black" }} onClick={handleClose} />
      </div>
    </div>
  );
};

export default React.memo(Notification);
