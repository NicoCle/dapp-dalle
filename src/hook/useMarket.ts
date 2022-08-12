import { useCallback, useState } from "react";
import { fetcher } from "./useFetcher";

const useMarket = () => {
  const [imgesList, setImagesList] = useState([]);
  const [src, setSrc] = useState("");

  const closeForm = () => setSrc("");

  const openForm = (url: string) => {
    setSrc(url);
  };

  const handleGerenate = useCallback(async () => {
    const data = await fetcher("/api/dalle");
    return setImagesList(data?.data.result);
  }, []);

  return { imgesList, src, closeForm, openForm, handleGerenate };
};
export default useMarket;
