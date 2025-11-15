import React, { createContext, useState } from "react";

export const UserContext = createContext(); // must be exactly this name

export const UserProvider = ({ children }) => { // must be exactly this name
  const [user, setUser] = useState({ name: "Katlego", age: 25 });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};