const BASE_URL = 'https://petaracorp.com';

const Meta = ({
  title,
  description,
  image = '/images/petara_logo_landscape.jpg',
  url = '/',
  keywords = 'Inflatables, Bouncy, Corporate Gifting, Petara Corporation, Event Solutions',
}) => {
  return (
    <head>
      <title>{title}</title>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <link rel='icon' href='/favicon.ico' />
      <meta name="author" content="Petara Corporation" />
      <meta property="og:type" content="website" />
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
    </head>
  );
};

export default Meta;