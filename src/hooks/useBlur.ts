import { useState, useRef, useEffect } from 'react';

const useBlur = (initBlurred: boolean = false) => {
  const [blurred, setBlurred] = useState(initBlurred);
  const bodyRef = useRef<HTMLBodyElement|null>();
  
  useEffect(() => {
    bodyRef.current = document.querySelector('body')
  }, []);

  useEffect(() => {
    const className = blurred ? 'blur' : '';
    bodyRef.current?.setAttribute('class', className);
  }, [blurred]);

  return [blurred, setBlurred] as const;
}

export default useBlur;
