import { useState } from "react";

function useLocalStorage(localStorageKey, defaultValue) {
  const [state, setState] = useState(() => {
    const stored = localStorage.getItem(localStorageKey);
    return stored ? JSON.parse(stored) : defaultValue;
  });

  function setLocalState(newState) {
    setState(newState);
    localStorage.setItem(localStorageKey, JSON.stringify(newState));
  }

  return [state, setLocalState];
}

export default useLocalStorage;
