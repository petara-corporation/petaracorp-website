import Head from 'next/head';

const PageTitle = ({ title }) => {
  return (
    <Head>
      <title>{title} | Petara Corporation</title>
    </Head>
  );
};

export default PageTitle;
