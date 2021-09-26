import { useState, useEffect, useRef } from 'react';

const useMediaQuery = (query: string) => {
  const [queryMatch, setQueryMatch] = useState(false);

  const listener = (evt: MediaQueryListEvent) => {
    setQueryMatch(evt.matches)
  };
  
  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    mediaQuery.addEventListener('change', listener);
    setQueryMatch(mediaQuery.matches); // initial check
    return () => {
      mediaQuery.removeEventListener('change', listener);
    }
  }, [query])

  return queryMatch;
};

export default useMediaQuery;
