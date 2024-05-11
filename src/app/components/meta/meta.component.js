import Head from 'next/head';

const Meta = ({
  title,
  description,
  summary = 'Inflatables, Bouncy & Corporate Gifting provider',
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      {/* open graph meta tags */}
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      {/* twitter meta tags */}
      <meta name='twitter:card' content={summary} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      {/* google seo meta tags */}
      <meta itemProp='name' content={title} />
      <meta itemProp='description' content={description} />
    </Head>
  );
};

export default Meta;
