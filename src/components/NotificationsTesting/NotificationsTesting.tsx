import { useDispatch } from "react-redux";
import * as actionCreators from "../../store/actionCreators";

export const NotificationsTesting = () => {
  const dispatch = useDispatch();

  const handleSuccessMessage = () => {
    dispatch(actionCreators.addSuccessNotification("success message"));
  };

  const handleInfoMessage = () => {
    dispatch(actionCreators.addInfoNotification("info message"));
  };

  const handleWarningMessage = () => {
    dispatch(actionCreators.addWarningNotification("warning message"));
  };

  const handleErrorMessage = () => {
    dispatch(actionCreators.addErrorNotification("error message"));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button onClick={handleSuccessMessage} style={{ padding: ".5rem" }}>
        Test Success Notification
      </button>
      <br />
      <button onClick={handleInfoMessage} style={{ padding: ".5rem" }}>
        Test Info Notification
      </button>
      <br />
      <button onClick={handleWarningMessage} style={{ padding: ".5rem" }}>
        Test Warning Notification
      </button>
      <br />
      <button onClick={handleErrorMessage} style={{ padding: ".5rem" }}>
        Test Error Notification
      </button>
    </div>
  );
};
