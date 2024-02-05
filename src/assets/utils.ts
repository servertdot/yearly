export const getStorageValue = (key: string) => {
  return localStorage.getItem(key);
}

export const getAndConvertStorageValue = (key: string, init: string = '{}') => {
  return JSON.parse(localStorage.getItem(key) || init);
}

export const setStorageValue = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value));
}