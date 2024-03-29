import {useEffect} from 'react';
import {useRouter} from 'next/router';

const setSmoothScroll = (isSmooth: boolean) => {
  document.documentElement.style.scrollBehavior = isSmooth ? 'smooth' : 'auto';
}

/* Next.js Link component doesn't play nicely with `scroll-behavior: smooth`
 * so this is a convoluted workaround. Essentially, smooth scrolling exists
 * at all times except during a page transition.
 */
const useSmoothScroll = () => {
  const router = useRouter();

  useEffect(() => {
    setSmoothScroll(true);
    const handleStart = () => setSmoothScroll(false);
    const handleStop = () => setSmoothScroll(true);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    }
  }, [router.events]);
}

export default useSmoothScroll;
