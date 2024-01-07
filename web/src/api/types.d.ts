export type PostRequest<T, K> = (data: T) => Promise<K>;
export type GetRequest<K> = () => Promise<K>;
export type GetRequestPaginated<K> = (page) => Promise<K[]>;
export type GetRequestById<K> = (id: string | number) => Promise<K>;
