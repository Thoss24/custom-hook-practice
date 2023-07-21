import React, { useState, useCallback } from "react";

const useHttp = () => {
  
  const [error, setError] = useState(null);

  const fetchHttp = useCallback(async (requestConfig, applyData) => {
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : 'GET', // if method is set use method else use GET
        headers: requestConfig.headers ? requestConfig.headers : {}, // if headers is set use it else return empty object
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null // if body is set convert to JSON else return null
      });

      if (!response.ok) {
        throw new Error("Request Failed");
      }

      const responseData = await response.json();

      applyData(responseData) // pass data to function to be used in other components

    } catch (error) {
      setError("Error");
    }
  }, []);

  return { fetchHttp };
};

export default useHttp;
