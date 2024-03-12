import { useEffect, useState } from "react";
import { GetRequestPaginated } from "@/api/types";

const useGetRows = <T, K>(request: GetRequestPaginated<T, K>) => {
  const [data, setData] = useState<{
    items: T[];
    loading: boolean;
  }>({
    items: [],
    loading: true,
  });

  const get = async (page: number) => {
    const data = await request(page);

    if (page === 1) {
      setData((s) => ({
        ...s,
        loading: false,
        items: [...data],
      }));
    } else {
      setData((s) => ({
        ...s,
        loading: false,
        items: [...s.items, ...data],
      }));
    }
  };

  useEffect(() => {
    get(1);
  }, []);

  return {
    loading: data.loading,
    data: data.items,
  };
};

export default useGetRows;
