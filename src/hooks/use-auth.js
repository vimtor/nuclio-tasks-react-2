import { useContext } from "react";
import AuthContext from "../contexts/auth-context";

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export default useAuth;
