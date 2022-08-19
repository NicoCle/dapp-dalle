import { useCallback, useState } from "react";

const useDalle = () => {
  const token = process.env.TOKEN_KEY;
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getDalle = useCallback(() => {
    if (query != "") {
      setError(false);
      setLoading(true);
      fetch(`/api/dalle?k=${token}&q=${query}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setResults(data.result.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          setError(false);
        });
    } else {
      setError(true);
    }
  }, [token, query]);

  return { setQuery, getDalle, results, loading, error };
};
export default useDalle;
