import React from 'react';
// import data
import { product } from '../data';
// import components
import Cards from './Cards';

const Product = () => {
  // destructure product data
  const { title, subtitle } = product;
  return (
    <section className='section'>
      <div className='container mx-auto'>
        {/* title & subtitle */}
        <div className='flex flex-col items-center lg:flex-row' style={{marginTop: 75}}>
          <h2
            className='section-title'
            data-aos='fade-up'
            data-aos-offset='250'
            data-aos-delay='200'
          >
            {title}
          </h2>
          <p
            className='lead lg:max-w-[400px]'
            data-aos='fade-up'
            data-aos-offset='250'
            data-aos-delay='300'
          >
            {subtitle}
          </p>
        </div>
        {/* cards */}
        <Cards />
      </div>
    </section>
  );
};

export default Product;
