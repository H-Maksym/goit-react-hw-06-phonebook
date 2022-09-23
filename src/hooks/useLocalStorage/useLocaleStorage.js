import { useEffect, useState } from 'react';

export default function useLocalStorage(
  key,
  defaultValue,
  serialization = JSON.stringify,
  deserialization = JSON.parse
) {
  const LS = deserialization(localStorage.getItem(key)) ?? defaultValue;
  const [state, setState] = useState(LS);

  useEffect(() => {
    localStorage.setItem(key, serialization(state));
  }, [key, state]);

  return [state, setState];
}
