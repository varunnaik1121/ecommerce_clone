import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
const HeroBanner = ({ heroBanner }) => {
  const banner = heroBanner;

  return (
    <div className="hero-banner-container">
      <p className="beats-solo">{banner.smallText}</p>
      <h3>{banner.midText}</h3>
      <h1>{banner.largeText1}</h1>
      <img
        src={urlFor(banner.image)}
        alt="headphones-image"
        className="hero-banner-image"
      ></img>
      <div>
        <Link
          href={`/product/${banner.product}`}
          as={`/product/${banner.product}`}
        >
          <button type="button">{banner.buttonText}</button>
        </Link>
        <div className="desc">
          <h5>{banner.desc}</h5>
          <p>DESCRIPTION</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
