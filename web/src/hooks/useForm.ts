import {useState} from "react";

const useForm = <T extends {},>(initialData: T) => {
  const [data, setData] = useState<T>(initialData)

  return {
    data,
    setData,
    onChange: (key: keyof T, value: T[keyof T]) => setData((s) => ({...s, [key]: value})),
  }
}

export default useForm