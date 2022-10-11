import '@styles/globals.scss';
import '@styles/sections.scss';
import '@styles/fonts.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { config } from '@fortawesome/fontawesome-svg-core';
import type { AppProps } from 'next/app';
import { useSmoothScroll } from '@hooks';

config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  useSmoothScroll();
  return <Component {...pageProps} />
}
export default MyApp
