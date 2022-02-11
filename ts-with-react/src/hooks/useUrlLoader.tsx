import { useEffect, useState } from "react";
import axios from "axios";

const useUrlLoader = (url: string, deps: any[] = []) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any>({});
  useEffect(() => {
    setIsLoading(true);
    axios.get(url).then((res: any) => {
      setIsLoading(false);
      setData(res.data);
    });
  }, deps);

  return [isLoading, data];
};

export default useUrlLoader;
