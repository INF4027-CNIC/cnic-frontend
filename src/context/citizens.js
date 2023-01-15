import { createContext } from "react";

const CitizenContext = createContext({
  // State
  citizens: [],

  // Actions
  loadCitizens: () => {},
  addCitizen: () => {},
  removeCitizen: () => {},
  updateCitizen: () => {},
})

export default CitizenContext;