import Head from 'next/head';

const BASE_URL = 'https://petaracorp.com';

const Meta = ({
  title,
  description,
  image = '/images/petara_logo_landscape.jpg',
  url = '/',
  keywords = 'Inflatables, Bouncy, Corporate Gifting, Petara Corporation, Event Solutions',
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <link rel="canonical" href={`${BASE_URL}${url.startsWith('/') ? url : `/${url}`}`} />
      {/* Open Graph meta tags */}
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={`${BASE_URL}${image.startsWith('/') ? image : `/${image}`}`} />
      <meta property='og:url' content={`${BASE_URL}${url.startsWith('/') ? url : `/${url}`}`} />
      {/* Twitter meta tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={`${BASE_URL}${image.startsWith('/') ? image : `/${image}`}`} />
      {/* Google SEO meta tags */}
      <meta itemProp='name' content={title} />
      <meta itemProp='description' content={description} />
      <meta itemProp='image' content={`${BASE_URL}${image.startsWith('/') ? image : `/${image}`}`} />
    </Head>
  );
};

export default Meta;