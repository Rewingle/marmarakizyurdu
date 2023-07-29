import React from 'react';
import Head from 'next/head';

export default function SEO({
  description = 'Kız öğrenci yurdu',
  author = 'Mehmet Ali Kul',
  meta,
  title = 'Marmara kız öğrenci yurdu',
}) {
  const metaData = [
    {
      name: `Kadıköyde kız öğrenci yurdu`,
      content: description,
    },
    {
      property: `og:Kadıköy Marmara kız öğrenci yurdu`,
      content: title,
    },
    {
      property: `og:Kadıköyde kız öğrenci yurdu`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `tr`,
  meta: [],
  description: `Kadıköy'ün merkezinde kız öğrenci yurdu`,
};
