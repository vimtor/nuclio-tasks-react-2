import React, { useState } from "react";
import AuthContext from "../contexts/auth-context";

function AuthProvider({ children }) {
  const [email, setEmail] = useState("");
  const [logged, setLogged] = useState(false);

  const login = ({ email, password }) => {
    // TODO: Real login against the API
    setEmail(email);
    setLogged(true);
  };

  const logout = () => {
    // TODO: Real logout against the API
    setEmail("");
    setLogged(false);
  };

  return (
    <AuthContext.Provider value={{ logged, email, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
