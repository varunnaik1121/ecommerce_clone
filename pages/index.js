import React from "react";
import {
  Footer,
  Cart,
  FooterBanner,
  HeroBanner,
  Layout,
  Navbar,
  Product,
} from "../components";
import { client } from "../lib/client";
const index = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      {console.log(products)}

      <div className="products-heading">
        <h2>Best Selling products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {products?.map((product) => {
          return <Product key={product._id} product={product}></Product>;
        })}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type=="product"]';
  const products = await client.fetch(query);
  const bannerquery = '*[_type=="banner"]';
  const bannerData = await client.fetch(bannerquery);
  return {
    props: { products, bannerData },
  };
};

export default index;
