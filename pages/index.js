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
      <HeroBanner />
      {console.log(bannerData)}

      <div className="products-heading">
        <h2>Best Selling products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {products?.map((product) => {
          return product.name;
        })}
      </div>
      <FooterBanner />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type=="products"]';
  const products = await client.fetch(query);
  const bannerquery = '*[_type=="banner"]';
  const bannerData = await client.fetch(bannerquery);
  return {
    props: { products, bannerData },
  };
};

export default index;
