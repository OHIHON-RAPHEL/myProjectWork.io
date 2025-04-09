import React from 'react';
import Logo from '../images/banner.gif';

const Banner = () => {
  return (
    <div className="bg-amber-500 p-3 flex justify-center">
      <div className="w-full max-w-6xl px-4">
        <a
          href="https://www.jumia.com.ng/mlp-free-delivery"
          target="_blank"
          rel="noreferrer noopener"
          className="block"
        >
          <img
            src={Logo}
            alt="Nav Logo"
            className="w-full h-auto object-contain"
          />
        </a>
      </div>
    </div>
    
  );
};

export default Banner;
