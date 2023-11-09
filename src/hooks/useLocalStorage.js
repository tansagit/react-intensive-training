import { useState } from "react";

export const useLocalStorage = (keyName, defaultValue) => {
  const getValue = () => {
    try {
      const value = window.localStorage.getItem(keyName);
      if (value) {
        return JSON.parse(value);
      }
      window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
      return defaultValue;
    } catch (error) {
      return defaultValue;
    }
  };

  const setValue = newValue => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (error) {}
    setStoredValue(newValue);
  };
  const [storedValue, setStoredValue] = useState(() => getValue());

  return [storedValue, setValue];
};
