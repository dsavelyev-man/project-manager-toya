import { createElement, ReactElement, useEffect, useState } from "react";
import RowList from "@components/ui/RowList.tsx";
import axios from "axios";

const useRowList = <T,>(
  request: (page: number) => Promise<T[]>,
  parameters: {
    card: (props: T) => JSX.Element;
  },
) => {
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
    element: createElement(RowList<T>, {
      items: data.items,
      loading: data.loading,
      card: parameters.card,
    }),
  };
};

export default useRowList;
