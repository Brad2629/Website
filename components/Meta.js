import Head from 'next/head';

export default function Meta() {
  return (
    <Head>
      <title>Bradley Paliska</title>
      <meta name="description" content="Bradley Paliska – former pro tennis player, finance & data enthusiast. Explore my projects, resume, and contact." />
      <meta property="og:title" content="Bradley Paliska" />
      <meta property="og:description" content="Tennis, finance, and data projects by Bradley Paliska." />
      <meta property="og:image" content="/images/og-image.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}