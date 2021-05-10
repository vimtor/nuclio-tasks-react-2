import NotificationContext from "../contexts/notification-context";
import { useContext } from "react";

function useNotifications() {
  const context = useContext(NotificationContext);
  return context;
}

export default useNotifications;
