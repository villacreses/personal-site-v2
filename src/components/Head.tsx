import { FC } from 'react';
import NextHead from 'next/head';
import { useRouter } from 'next/router';
import { metadata } from '@data';
import { metadataType } from '@types';
/**
 * TODO:
 *   - Look up: google-site-verification
 *   - set up API & replace metadata object
 */

const META_PROPS = ['title', 'description', 'image'] as const;
export type HeadProps = Partial<Pick<metadataType, typeof META_PROPS[number]>>;

const Head: FC<HeadProps> = ({
  children,
  ...props
}) => {
  const router = useRouter();

  const seo = {
    title: props.title || metadata.title,
    description: props.description || metadata.description,
    url: `${metadata.siteUrl}${router.pathname}`
  };

  return (
    <NextHead>
      <html lang="en" />

      <title>{seo.title}</title>

      <meta name="robots" content="all" />
      <meta name="google" content="nositelinkssearchbox" />
      
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      {/* <meta property="og:image" content={seo.image} /> */}
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={seo.title} />
      <meta property="twitter:description" content={seo.description} />
      {/* <meta property="twitter:image" content={seo.image} /> */}
    </NextHead>
  )
}

export default Head;
