import React from 'react';
import Head from 'next/head';

const Seo = ({ metaTitle, metaDescription, metaImage, lang }) => {
console.log("🚀 ~ file: SEO.jsx ~ line 5 ~ Seo ~ metaImage", metaImage)
  return (
    <Head>
      <title>{metaTitle}</title>
      <meta lang={lang} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {metaDescription && <meta name="description" content={metaDescription} />}
      <meta name="og:title" content={metaTitle} />
      {metaDescription && (
        <meta name="og:description" content={metaDescription} />
      )}
      {metaImage && <meta name="og:image" content={metaImage.url} />}
      {metaImage && <meta name="og:image:alt" content={metaTitle} />}
    </Head>
  );
};

export default Seo;
