import CurrentUserContext from "context/currentUser"
import useGetCitizens from "hooks/useGetCitizens";
import { useContext, useEffect } from "react"
import CitizenContext from "context/citizens"

const Base = ({ children }) => {
  // Get current user
  const { currentUser } = useContext(CurrentUserContext);
  const { loadCitizens } = useContext(CitizenContext)

  const { citizens } = useGetCitizens(currentUser);

  useEffect(() => {
    if (citizens.length > 0) {
      loadCitizens(citizens);
    }
  }, [citizens]);

  return (
    <>
      { children }
    </>
  )
}

export default Base