import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { removeNotification } from "../../../store/actionCreators";
import "./Modal.css";

const Modal: React.FC<any> = ({ id, content, hasBackdropClose }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="modal-backdrop-container"
      onClick={() => hasBackdropClose && dispatch(removeNotification(id))}
    >
      <div className="modal-backdrop-cover" />
      <div className="modal-content">
        {content ?? <>no content here...</>}
        <Button
          onClick={() => dispatch(removeNotification(id))}
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            margin: "0.25rem",
            color: "black",
          }}
          size="small"
        >
          <CloseIcon />
        </Button>
      </div>
    </div>
  );
};

export default React.memo(Modal);
