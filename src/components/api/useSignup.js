import React, { useState } from "react";
import axios from "axios";
import Config from "react-native-config";

const useSignup = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const postUser = async (postData) => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.post(
        `${Config.API_URL}/users/new`,
        postData
      );
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError(true);
    }
  };

  console.log("api ", { data, loading });

  return { data, loading, error, postUser };
};

export default useSignup;
