import { CitizenFetcher } from "api";
import { Citizen } from "entities/citizen.entity";
import { useState, useEffect } from "react";

const fetcher = new CitizenFetcher();

const useGetCitizens = (currentUser) => {
  const [citizens, setCitizens] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (currentUser) getCitizens();
  }, [currentUser]);

  // Get citizens
  const getCitizens = async () => {
    setLoading(true);

    const response = await fetcher.getCitizens();

    if (response && response.status === 200) {
      const citizens = [];

      for (let user of response.data) {
        const citizen = new Citizen(user);

        citizens.push(citizen);
      }

      setCitizens(citizens);
      setLoading(false);
    } else {
      console.log(response.error);
      setLoading(false);
    }
  };

  return { citizens };
};

export default useGetCitizens;
