import { createContext } from "react";

const CitizenContext = createContext({
  // State
  citizens: [],
  currentCitizen: null,

  // Actions
  loadCitizens: () => {},
  addCitizen: () => {},
  removeCitizen: () => {},
  updateCitizen: () => {},
  setCurrentCitizen: () => {},
})

export default CitizenContext;