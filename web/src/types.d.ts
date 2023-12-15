import { Dispatch, SetStateAction } from "react";

export type Action<T> = Dispatch<SetStateAction<T>>;
