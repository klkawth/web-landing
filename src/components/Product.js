import React from 'react';
// import data
import { product } from '../data';
// import components
import Cards from './Cards';

const Product = () => {
  // destructure product data
  const { title, subtitle, image } = product;
  return (
    <section className='py-6 lg:py-8 bg-[#fafafa]'>
      <div className='container mx-auto px-6 lg:px-12'>
        {/* Image left, content right */}
        <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-8 gap-y-6'>
          {/* image - left */}
          <div className='flex-1 lg:max-w-[45%] order-2 lg:order-1' data-aos='fade-right' data-aos-offset='100'>
            <img
              src={image}
              alt='Klawth retail revolution'
              className='w-full max-h-[320px] lg:max-h-[380px] rounded-[12px] lg:rounded-[16px] shadow-md object-cover object-top'
            />
          </div>
          {/* text - title then paragraph - right */}
          <div className='flex-1 lg:max-w-[50%] order-1 lg:order-2' data-aos='fade-left' data-aos-offset='100'>
            <h2 className='text-xl lg:text-3xl font-bold text-dark mb-3'>{title}</h2>
            <p className='text-[#4a5568] text-base leading-relaxed mb-0'>{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
