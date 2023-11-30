function exclude<T, K extends keyof T>(object: T, omit: K[]) {
  const data = { ...object };

  omit.forEach((key) => delete data[key]);

  return data;
}

export default exclude;
