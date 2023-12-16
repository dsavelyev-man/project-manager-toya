import { GetRequestById } from "@/api/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useGetById = <T>(request: GetRequestById<T>) => {
  const [data, setData] = useState<{
    result: T | undefined;
    loading: boolean;
  }>({
    result: undefined,
    loading: true,
  });
  const params = useParams<{
    id: string;
  }>();

  const get = async () => {
    const data = await request(params.id);

    setData((s) => ({
      ...s,
      result: data,
      loading: false,
    }));
  };

  useEffect(() => {
    get();
  }, []);

  return {
    data: data.result,
    loading: data.loading,
  };
};

export default useGetById;
