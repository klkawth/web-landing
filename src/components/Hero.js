import React from 'react';
import { hero } from '../data';
import GooglePlayIcon from '../assets/img/copyright/googleplay.svg';

const Hero = () => {
  const { title, subtitle, btnText, logo, background, appImage } = hero;

  const playStoreLink = 'https://play.google.com/store/apps/details?id=com.klawth.app';

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#fafafa',
      }}
    >
      {/* Purple-blue glow overlay at bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(139, 92, 246, 0.15) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 flex flex-col min-h-screen w-full px-6 lg:px-12 pt-6 pb-8">
          {/* Header: Logo + Download App button */}
          <div className="flex justify-between items-center mb-6 lg:mb-8">
            <a href="/" data-aos="fade-down" data-aos-delay="100">
              <img src={logo} alt="Klawth" className="h-10 lg:h-12 w-auto" />
            </a>
            <a
              href={playStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm bg-[#292830] text-white border-0 hover:bg-[#3d3a45] px-6 rounded-full"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              {btnText}
            </a>
          </div>

          {/* Main content - centered */}
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            {/* Main heading */}
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#292830] mb-4 max-w-4xl leading-tight"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              {title}
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              {subtitle}
            </p>

            {/* App Store button */}
            <div
              className="flex justify-center items-center mb-8 lg:mb-12"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <a
                href={playStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#292830] text-white px-6 py-3 rounded-full hover:bg-[#3d3a45] transition-colors"
              >
                <img src={GooglePlayIcon} alt="" className="w-8 h-8" />
                <span className="text-sm font-medium">Get it on Google Play</span>
              </a>
            </div>

            {/* App image - phone in hand */}
            <div
              className="relative flex justify-center items-end"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-offset="0"
            >
              <img
                src={appImage}
                alt="Klawth app"
                className="max-w-[280px] sm:max-w-[320px] lg:max-w-[380px] xl:max-w-[420px] w-full drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
    </section>
  );
};

export default Hero;
