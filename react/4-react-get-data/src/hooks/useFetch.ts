import { useEffect, useState } from "react";

export const useFetch = <T>(url: string): [boolean, T | undefined] => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data) return;

    const getData = async () => {
      setLoading(true);

      try {
        const response = await fetch(url);
        const result: T = await response.json();

        setData(result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  });

  return [loading, data];
};
