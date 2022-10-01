import axios from "axios";
import { useCallback, useRef, useState } from "react";

export const useHttpClient = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  /* Why here not use useState instead useRef 
  => useRef will not change value when component re-render */
  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(
    async (url, method = "GET", data = null, headers = {}) => {
      setIsLoading(true);
      const httpAbortCtrl = new AbortController();
      activeHttpRequests.current.push(httpAbortCtrl);
      try {
        const res = await axios({
          url,
          method,
          data,
          headers,
        });

        /* Remove abort when request completed */
        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqCtrl) => reqCtrl !== httpAbortCtrl
        );

        setIsLoading(false);
        return res.data;
      } catch (err) {
        setIsLoading(false);
        setError(err.response.data.message);
        throw err;
      }
    },
    []
  );

  const clearError = () => {
    setError(null);
  };

  return { sendRequest, error, isLoading, clearError };
};
