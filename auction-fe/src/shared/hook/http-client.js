import axios from "axios";
import { useCallback, useRef, useState } from "react";
import { toast } from "react-toastify";

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
        const response = await axios({
          url,
          method,
          data,
          headers,
        });

        /* Remove abort when request completed */
        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqCtrl) => reqCtrl !== httpAbortCtrl
        );

        if (response.status !== 200) {
          throw new Error("error");
        }

        setIsLoading(false);
        return response.data;
      } catch (err) {
        setIsLoading(false);
        setError(err.response.data.message);
        toast(err.response.data.message, { type: "error" });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const clearError = () => {
    setError(null);
  };

  return { error, clearError, sendRequest, isLoading };
};
