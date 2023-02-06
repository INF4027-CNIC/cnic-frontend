import { AdminFetcher } from "api";
import { useCallback, useEffect, useState } from "react";

const adminFetcher = new AdminFetcher();

const useGetUser = (currentUser) => {
  const [user, setUser] = useState(currentUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentUser) handleGetUser();
    else setLoading(false);
  }, []);

  const handleGetUser = async () => {
    setLoading(true);

    const response = await adminFetcher.getCurrentSuperAdmin();

    if (response && response.status === 200) {
      setUser(response.data);
    }

    setLoading(false);
  }

  return { user, loading };
}

export default useGetUser;