export const getServerSideProps = async () => {
  const query = '*[_type=="product"]';
  const products = await client.fetch(query);
  const bannerquery = '*[_type=="banner"]';
  const bannerData = await client.fetch(bannerquery);
  return {
    props: { products, bannerData },
  };
};
