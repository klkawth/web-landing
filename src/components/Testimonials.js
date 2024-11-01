import React from 'react';
// import data
import { testimonials } from '../data';
// import components
import ClientSlider from '../components/ClientSlider';

const Testimonials = () => {
  // destructure testimonials
  const { title, clients } = testimonials;
  return (
    <section className='section' style={{marginTop: 35}}>
      <div className='container mx-auto'>
        {/* title */}
        {/* <div className='pretitle'>It's Your support & wishes that constantly encourages us to build klawth a best place</div> */}
        <h2
          className='title mb-10 lg:mb-20 text-center max-w-[920px] mx-auto'
          data-aos='fade-up'
          data-aos-delay='200'
        >
          {title}
        </h2>
        {/* slider */}
        <div data-aos='fade-up' data-aos-delay='400'>
          <ClientSlider clients={clients} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
