import axios from "axios";
import { useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useHttpClient = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  /* Why here not use useState instead useRef
  => useRef will not change value when component re-render */
  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(
    async (url, method = "GET", data = null, headers = {}, urlRedirect) => {
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

        if (urlRedirect) {
          navigate(urlRedirect);
        }

        throw err;
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
