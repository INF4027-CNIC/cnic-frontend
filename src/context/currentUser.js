import { createContext } from "react";

const CurrentUserContext = createContext({
  // State
  currentUser: null,

  // Actions
  login: () => {},
  logout: () => {},
})

export default CurrentUserContext;