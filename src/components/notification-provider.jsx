import React, { useState } from "react";
import NotificationContext from "../contexts/notification-context";

function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]);

  const createNotification = (notification) => {
    setNotifications([...notifications, notification]);
    setTimeout(() => {
      setNotifications(notifications);
    }, 2000);
  };

  return (
    <NotificationContext.Provider value={{ createNotification }}>
      {children}
      <ul className="notifications">
        {notifications.map((notification) => {
          return <li key={notification}>{notification}</li>;
        })}
      </ul>
    </NotificationContext.Provider>
  );
}

export default NotificationProvider;
