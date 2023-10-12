// import { useState, useEffect } from "react";

// const storage = localStorage || sessionStorage;

// const useLocalStorage = (key, initialValue) => {
//   const getItem = () => {
//     const storedValue = storage.getItem(key);
//     return storedValue ? JSON.parse(storedValue) : initialValue;
//   };

//   const [value, setValue] = useState(getItem);

//   useEffect(() => {
//     storage.setItem(key, JSON.stringify(value));
//   }, [value, key]);

//   const removeItem = () => {
//     storage.removeItem(key);
//   };

//   return [value, setValue, removeItem];
// };

// export default useLocalStorage;

// import { useState } from "react";

const useLocalStorage = (): [
  (key: string, value: any) => void,
  (key: string) => void,
  (key: string) => any
] => {
  const saveItem = (key: string, value: any) =>
    localStorage.setItem(key, JSON.stringify(value));

  const deleteItem = (key: string) => localStorage.removeItem(key);

  const getItem = (key: string) => localStorage.getItem(key);

  return [saveItem, deleteItem, getItem];
};
export default useLocalStorage;
