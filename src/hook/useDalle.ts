import { useCallback, useState } from "react";

const useDalle = () => {
  const [token, setToken] = useState("");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getDalle = useCallback(async () => {
    if (token != "" && query != "") {
      setLoading(true);
      await fetch(`/api/dalle?k=${token}&q=${query}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setResults(data.result);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          setError(err);
        });
    } else {
      setError("Ingrese la frase");
    }
  }, [token, query]);

  return { setToken, setQuery, getDalle, results, loading, error };
};
export default useDalle;
