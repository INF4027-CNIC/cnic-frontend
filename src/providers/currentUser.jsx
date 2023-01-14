import CurrentUserContext from "context/currentUser";
import { useState } from "react";

export const CurrentUserProvider = ({ children }) => {
  // State
  const [currentUser, setCurrentUser] = useState(null);

  // Actions
  const login = (user) => {
    setCurrentUser(user);
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const contextValue = {
    // State
    currentUser,

    // Actions
    login,
    logout,
  };

  return (
    <CurrentUserContext.Provider value={contextValue}>
      {children}
    </CurrentUserContext.Provider>
  );
};
