import React from "react";
import Link from "next/link";
const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
      <p className="beats-solo">SMALL TEXT</p>
      <h3>MID TEXT</h3>
      <img src="" alt="headphones-image"></img>
      <div>
        <Link href="/products/ID">
          <button type="button">BUTTON TEXT</button>
        </Link>
        <div className="desc">
          <h5>Description</h5>
          <p>DESCRIPTION</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
