import { useState, useEffect } from "react";
import axios from "axios";
const useFetch = (URL) => {
  let [products, setProducts] = useState([]);
  let [error, setError] = useState();
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let fetchApi = async () => {
      try {
        // let response = await fetch(URL);
        let response = await axios.get(URL);
        setProducts(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchApi();
  }, []);

  return { products, error, isLoading, setProducts };
};

export default useFetch;
