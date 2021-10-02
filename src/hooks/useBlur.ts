import { useRef, useEffect } from 'react';

const useBlur = (blurred?: boolean) => {
  const bodyRef = useRef<HTMLBodyElement|null>();
  
  useEffect(() => {
    bodyRef.current = document.querySelector('body')
  }, []);

  useEffect(() => {
    const className = blurred ? 'blur' : '';
    bodyRef.current?.setAttribute('class', className);
  }, [blurred])
}

export default useBlur;
