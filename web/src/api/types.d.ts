export type PostRequest<T, K> = (data: T) => Promise<K>;
export type GetRequest<K> = () => Promise<K>;
export type GetRequestPaginated<K, T> = (page, extra?: T) => Promise<K[]>;
export type GetRequestById<K> = (id: string | number) => Promise<K>;
export type GetRequestByParams<K, P extends { [key: string]: string }> = (
  params: P,
) => Promise<K>;
