import React, { useState } from "react";
import axios from "axios";
import Config from "react-native-config";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const postUser = async (postData) => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.post(
        `${Config.API_URL}/users/login`,
        postData
      );
      setLoading(false);
      return response.data;
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError(true);
    }
  };

  return { loading, error, postUser };
};

export default useLogin;
