import React from 'react';
import Head from 'next/head';

export default function SEO({
  description,
  author,
  meta,
  title,
}) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:Kadıköy Marmara kız öğrenci yurdu`,
      content: title,
    },
    {
      property: `og:Kadıköy'de kız öğrenci yurdu`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `Kadıköy'ün merkezinde kız öğrenci yurdu`,
    },
    {
      name: `twitter:creator`,
      content: 'Mehmet Ali Kul',
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
  meta: ['kız yurdu','kadıköy','kız öğrenci yurdu','yurt','acıbadem üniversitesi','medeniyet üniversitesi','bahçeşehir üniversitesi','üsküdar üniversitesi','29 mayıs üniversitesi','kadıköy merkez','öğrenci','konaklama','özel yurt'],
  description: `Kadıköy'ün merkezinde kız öğrenci yurdu`,
};
