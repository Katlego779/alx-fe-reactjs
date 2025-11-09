import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function UserProfile() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
    </div>
  );
}

export default UserProfile;