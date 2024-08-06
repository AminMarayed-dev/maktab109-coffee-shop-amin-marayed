import { useEffect, useState } from "react";

export function useStorage<T>(
  key: string,
  initState: T
): [T, React.Dispatch<React.SetStateAction<T>>, () => void] {
  const isBrowser = typeof window !== "undefined";

  const getInitialState = () => {
    if (!isBrowser) return initState;
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initState;
  };

  const [state, setState] = useState<T>(getInitialState);

  useEffect(() => {
    if (isBrowser) {
      localStorage.setItem(key, JSON.stringify(state));
    }
  }, [key, state, isBrowser]);

  const removeStorage = () => {
    if (isBrowser) {
      localStorage.removeItem(key);
      setState(initState);
    }
  };

  return [state, setState, removeStorage];
}
