import React from "react";
import useAuth from "../hooks/use-auth";

function ProfilePage() {
  const { email } = useAuth();
  return (
    <div>
      Hello <code>{email}</code>!
    </div>
  );
}

export default ProfilePage;
