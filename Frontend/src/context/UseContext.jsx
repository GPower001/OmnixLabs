import React from "react";
import { createContext, useContext, useState } from "react";

// 1. Create the context
const UserContext = createContext();

// 2. Create provider
export default function UserProvider({ children }) {
  const [user, setUser] = useState(null); // null = not logged in

  // Example login function
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // optional persistence
  };

  // Example logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

// 3. Custom hook for easy use
export const useUser = () => useContext(UserContext);
