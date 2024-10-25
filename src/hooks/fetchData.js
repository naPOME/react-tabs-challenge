// hooks/useFetchData.js
import { useState, useEffect } from 'react';

export const useFetchData = (endpoint) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; 

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const cachedData = sessionStorage.getItem(endpoint);

        if (cachedData) {
          if (isMounted) setData(cachedData);
        } else {
          const response = await fetch(endpoint);
          if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.statusText}`);
          }
          const result = await response.text();

          sessionStorage.setItem(endpoint, result);

          if (isMounted) setData(result);
        }
      } catch (fetchError) {
        if (isMounted) setError(fetchError);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [endpoint]);

  return { data, isLoading, error };
};
