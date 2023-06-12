import React, { useState } from "react";
import axios from "axios";
import Config from "react-native-config";

const useWorkoutPlan = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const API_URL = "http://localhost:3002"

  const postPlan = async (postData) => {
    setLoading(true);
    setError(false);
    console.log(`API URL ${Config.API_URL}`)
    try {
      const response = await axios.put(
        `${Config.API_URL}/exercise/plan`,
        postData
      )
      
      setLoading(false);
      setError(true);

      return response.data;
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError(true);
    }
  };

  return { loading, error, postPlan };
};

export default useWorkoutPlan;
