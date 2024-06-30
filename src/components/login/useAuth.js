import { useState } from "react";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [isvalid, setisvalid] = useState();

  const login = async (url, username, password) => {
    setIsLoading(true);
    setError(null);
    setisvalid(false);

    const response = await fetch(url, {
      method: "GET",
    });
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
      setisvalid(false);
    }

    if (response.ok) {
      // save the user to local storage

      localStorage.setItem("user", JSON.stringify({ username, password }));
      setIsLoading(false);
      setisvalid(true);
    }
  };

  return { login, isLoading, error, isvalid };
};
