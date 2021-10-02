import { useState, useEffect, useCallback } from "react";

const useNavAutohide = () => {
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const handleScroll = useCallback(() => {
    setScrolledToTop(window.scrollY < 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  return scrolledToTop;
};

export default useNavAutohide;
