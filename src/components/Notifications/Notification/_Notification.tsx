import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { useDispatch } from "react-redux";
import { removeNotification } from "../../../store/actionCreators";
import "./Notification.css";

export const Notification: React.FC<{
  title: string;
  message: React.ReactElement;
  id: string;
  style: any;
  icon: React.ReactElement;
}> = ({ id, title, message, style, icon }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(removeNotification(id));
  };

  return (
    <div className="notification-container" style={style}>
      <div className="notification-content">
        {icon}
        <div className="notification-content-message">
          <h3>{title}</h3>
          {message}
        </div>
        <CloseIcon sx={{ color: "black" }} onClick={handleClose} />
      </div>
    </div>
  );
};

export default React.memo(Notification);
