import CitizenContext from "context/citizens";
import { useState } from "react";

export const CitizenProvider = ({ children }) => {
  // State
  const [citizens, setCitizens] = useState([]);

  // Actions
  const addCitizen = (citizen) => {
    setCitizens([...citizens, citizen]);
  };

  const removeCitizen = (citizen) => {
    setCitizens(citizens.filter((c) => c.id !== citizen.id));
  };

  const loadCitizens = (citizens) => {
    console.log(citizens);
    setCitizens(citizens);
  };

  const updateCitizen = (citizen) => {
    setCitizens(citizens.map((c) => (c.id === citizen.id ? citizen : c)));
  };

  const contextValue = {
    // State
    citizens,

    // Actions
    addCitizen,
    removeCitizen,
    loadCitizens,
    updateCitizen,
  };

  return <CitizenContext.Provider value={contextValue}>{children}</CitizenContext.Provider>;
};
