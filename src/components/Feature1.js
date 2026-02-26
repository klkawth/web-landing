import React from 'react';
// import data
import { features } from '../data';
// import { HiArrowRight } from 'react-icons/hi';

const Feature1 = () => {
  // destructure features
  const { feature1 } = features;
  // destructure feature1
  const { pretitle, title, subtitle, image } = feature1;
  return (
    <section className='py-6 lg:py-8 bg-white'>
      <div className='container mx-auto px-6 lg:px-12'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-8 gap-y-6'>
          {/* text - compact */}
          <div className='flex-1 lg:max-w-[50%]' data-aos='fade-right' data-aos-offset='100'>
            <div className='pretitle text-[#718096] text-sm mb-1'>{pretitle}</div>
            <h2 className='text-xl lg:text-3xl font-bold text-dark mb-3'>{title}</h2>
            <p className='text-[#4a5568] text-base leading-relaxed mb-0'>{subtitle}</p>
          </div>
          {/* image - constrained height */}
          <div className='flex-1 lg:max-w-[45%]' data-aos='fade-left' data-aos-offset='100'>
            <img
              src={image}
              alt='Klawth Founders at Shark Tank India'
              className='w-full max-h-[320px] lg:max-h-[380px] rounded-[12px] lg:rounded-[16px] shadow-md object-cover object-top'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature1;
