import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import "./App.css";
import { Notifications } from "./components/Notifications";
import { NotificationsTesting } from "./components/NotificationsTesting";

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <p>
          Press one of the buttons for adding an instance of the related
          notification message:
        </p>
        <NotificationsTesting />
      </div>
      <Notifications />
    </Provider>
  );
};

export default App;
