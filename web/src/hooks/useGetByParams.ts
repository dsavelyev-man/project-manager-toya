import { GetRequestById, GetRequestByParams } from "@/api/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useGetByParams = <T, P extends { [key: string]: string }>(
  request: GetRequestByParams<T, P>,
) => {
  const [data, setData] = useState<{
    result: T | undefined;
    loading: boolean;
  }>({
    result: undefined,
    loading: true,
  });
  const params = useParams<P>();

  const get = async () => {
    try {
      const data = await request(params as P);

      setData((s) => ({
        ...s,
        result: data,
        loading: false,
      }));
    } catch (e) {
      console.error(e);
      setData((s) => ({
        ...s,
        result: s.result,
        loading: false,
      }));
    }
  };

  useEffect(() => {
    setData((s) => ({
      ...s,
      loading: true,
    }));
    get();
  }, [params]);

  return {
    data: data.result,
    loading: data.loading,
  };
};

export default useGetByParams;
