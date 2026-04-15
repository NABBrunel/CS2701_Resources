import { useState, useEffect } from 'react';
import axios from "axios";

function useFetchData(url,token) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!url) {  
      setLoading(false);
      return;
    }

    async function fetchData() {
      try {
        const response = await axios({
              method: 'get',
              url: url,
              headers: {"Authorization" : `Bearer ${token}`}
        })
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url, token]);

  return { data, error, loading };
}

export default useFetchData;
