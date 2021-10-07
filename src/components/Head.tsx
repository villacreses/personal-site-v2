import { FC } from 'react';
import NextHead from 'next/head';

/**
 * 
 * TODO:
 *   - Look up: google-site-verification
 *   - set up API & replace empty strings below
 */

// 

const Head: FC = () => {
  const seo = {
    title: '',
    description: '',
    image: '',
    url: '',
  };

  return (
    <NextHead>
      <html lang="en" />
      <meta name="robots" content="all" />
      <meta name="google" content="nositelinkssearchbox" />
      
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={seo.title} />
      <meta property="twitter:description" content={seo.description} />
      <meta property="twitter:image" content={seo.image} />

    </NextHead>
  )
}

export default Head;
