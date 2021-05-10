import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/use-auth";

function Navbar() {
  const { logged, logout } = useAuth();
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/tasks">Tasks</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        {logged ? (
          <Link to="/login" onClick={logout}>
            Logout
          </Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
    </ul>
  );
}

export default Navbar;
