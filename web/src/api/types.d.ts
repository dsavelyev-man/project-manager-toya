export type PostRequest<T, K> = (data: T) => Promise<K>
export type GetRequest<K> = () => Promise<K>