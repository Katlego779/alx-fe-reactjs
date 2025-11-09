import React, { createContext, useState } from "react";

// Create the context
export const UserContext = createContext();

// Create the provider
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "", age: 0 }); // default empty state

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};