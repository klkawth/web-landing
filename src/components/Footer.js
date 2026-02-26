import React from 'react';
import { footer, copyright, hero } from '../data';
import GooglePlayIcon from '../assets/img/copyright/googleplay.svg';
import { HiOutlineChevronDown } from 'react-icons/hi';

const Footer = () => {
  const { logo, download } = footer;
  const { social } = copyright;
  const { appImage } = hero;

  return (
    <footer>
      {/* Download Mobile App Section - white bg, light gradient card */}
      <div className="bg-white py-6 lg:py-8 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div
            className="rounded-[24px] p-6 lg:p-8 xl:p-10 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-8 lg:gap-12"
            style={{
              background: 'linear-gradient(135deg, #fff5f8 0%, #f5fff8 25%, #f8f5ff 50%, #fffef5 75%, #fff5f8 100%)',
            }}
          >
            {/* Left: Text + Button - left aligned */}
            <div className="flex-1 text-left">
              <p className="text-[#333333] text-base lg:text-lg font-normal mb-[26px]">{download.headline}</p>
              <h3 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-[#333333] mb-4 flex items-center gap-2">
                Download Mobile App
              </h3>
            
              <a
                href={download.playStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#222222] text-white px-6 py-3 rounded-lg hover:bg-[#333333] transition-colors mb-[26px]"
              >
                <img src={GooglePlayIcon} alt="" className="w-8 h-8" />
                <span className="text-sm lg:text-base font-medium">Get it on Google Play</span>
              </a>
              <p className="text-[#333333] text-sm lg:text-base font-normal">{download.tagline}</p>
            </div>

            {/* Right: Phone image */}
            <div className="flex-shrink-0 flex justify-center lg:justify-end">
              <img
                src={appImage}
                alt="Klawth app"
                className="max-w-[180px] sm:max-w-[220px] lg:max-w-[240px] xl:max-w-[280px] w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Logo + Social Section - row on all screen sizes */}
      <div className="bg-white py-6 lg:py-10 px-4 lg:px-12">
        <div className="container mx-auto flex flex-row items-center justify-between gap-4">
          <a href="/" className="flex-shrink-0">
            <img src={logo} alt="Klawth" className="h-8 lg:h-12 w-auto" />
          </a>

          <div className="flex items-center gap-2 lg:gap-4">
            {social.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 lg:w-11 lg:h-11 rounded-full bg-[#292830] hover:bg-[#3d3a45] transition-colors overflow-hidden"
                aria-label={item.label || 'Social link'}
              >
                <img
                  src={item.icon}
                  alt={item.label || ''}
                  className="w-4 h-4 lg:w-6 lg:h-6 object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
