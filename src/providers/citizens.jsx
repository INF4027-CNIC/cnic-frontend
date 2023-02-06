import CitizenContext from "context/citizens";
import { useState } from "react";

export const CitizenProvider = ({ children }) => {
  // State
  const [citizens, setCitizens] = useState([]);
  const [citizen, setCitizen] = useState(null);

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
    setCitizens(
      citizens.map((c) => (c.id === citizen.id ? citizen : c))
    );
  };

  const setCurrentCitizen = (citizenId) => {
    const citizen = citizens.find((c) => c.id === citizenId);

    if (citizen) setCitizen(citizen);
  };

  const contextValue = {
    // State
    citizens,
    citizen,

    // Actions
    addCitizen,
    removeCitizen,
    loadCitizens,
    updateCitizen,
    setCurrentCitizen,
  };

  return (
    <CitizenContext.Provider value={contextValue}>
      {children}
    </CitizenContext.Provider>
  );
};
