import {SyntheticEvent, useState} from "react";
import {PostRequest} from "../api/types";
import {AxiosError, isAxiosError} from "axios";

const useForm = <T extends {}, K>(initialData: T, request: PostRequest<T, K>, callback: (result: K) => void) => {
  const [data, setData] = useState<T>(initialData)
  const [error, setError] = useState<{
    main: undefined|string
  }>({
    main: undefined
  })

  return {
    data,
    setData,
    onChange: (key: keyof T, value: T[keyof T]) => setData((s) => ({...s, [key]: value})),
    onSubmit: async (e: SyntheticEvent) => {
      e.preventDefault()

      try {
        const res = await request(data)

        callback(res)
        setError({
          main: undefined
        })
      } catch (e: any | AxiosError) {
        if(isAxiosError(e)) {
          setError((s) => ({
            ...s,
            main: e.message
          }))
          console.error(e)
        }
      }
    },
    error
  }
}

export default useForm