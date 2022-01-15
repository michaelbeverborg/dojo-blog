import { useState, useEffect } from "react";

// Custom hooks need to start with the word use
const useFetch = url => {
  const [data, setData] = useState(null);
  const [isPending, setPending] = useState(true);
  const [error, setError] = useState(null);

  // useEffect runs at initialization of the component AND everytime the date (useState) changes
  useEffect(() => {
    fetch(url)
      .then(res => {
        // Check status of response
        if (!res.ok) {
          throw Error("Could not fetch data");
        }
        // response received and return it as json
        return res.json();
      })
      // below .then happens after the return from .then above happens
      // put data in a function that puts it in setBlogs
      .then(data => {
        setData(data);
        setPending(false);
        setError(null);
      })
      // Catch error. Doesn't work if for example the request does reach the server but the endpoint doesn't exist
      .catch(err => {
        setPending(false);
        setError(err.message);
      });
    // An empty array dependency makes the useEffect only run once at initialization
    // With url inside, it will run also when url changes
  }, [url]);

  // Return the 3 properties to be used in other files as objects
  return { data, isPending, error };
};

export default useFetch;
