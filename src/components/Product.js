import React from 'react';
// import data
import { product } from '../data';
// import components
import Cards from './Cards';

const Product = () => {
  // destructure product data
  const { title, subtitle } = product;
  return (
    <section className='py-8 lg:py-10 bg-[#fafafa]'>
      <div className='container mx-auto px-6 lg:px-12'>
        {/* title & subtitle - compact layout */}
        <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-x-12 gap-y-4'>
          <h2
            className='text-2xl lg:text-4xl font-bold text-dark flex-1 lg:max-w-[40%] mb-0'
            data-aos='fade-up'
            data-aos-offset='250'
            data-aos-delay='200'
          >
            {title}
          </h2>
          <p
            className='text-[#4a5568] lg:max-w-[500px] flex-1 text-base lg:text-lg leading-relaxed mb-0'
            data-aos='fade-up'
            data-aos-offset='250'
            data-aos-delay='300'
          >
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Product;
