import { useCallback } from 'react';
import debounce from 'lodash.debounce';

const useDebounce = (callback, delay) => {
  const debounceCallback = useCallback(debounce(callback, delay), [delay]);
  return debounceCallback;
};

export default useDebounce;
