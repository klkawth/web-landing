import React, { useState, useEffect } from 'react';
// import data
import { header } from '../data';
// import icons
import { HiMenuAlt4, HiOutlineX } from 'react-icons/hi';
// import components
import MobileNav from '../components/MobileNav';
import Nav from '../components/Nav';
import GooglePlayIcon from '../assets/img/copyright/googleplay.svg';

const Header = () => {
  // mobile nav state
  const [mobileNav, setMobileNav] = useState(false);
  // header state
  const [isActive, setIsActive] = useState(false);
  // destructure header data
  const { logo, btnText } = header;
  // scroll event
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? 'lg:top-0 bg-white shadow-2xl' : 'lg:top-[20px]'
      } py-6 lg:py-4 fixed w-full transition-all z-10`}
    >
      <div className='container mx-auto flex justify-between items-center'>
        {/* logo */}
        <a href='/' data-aos='fade-down' data-aos-delay='1000'>
          <img src={logo} style={{width:120}} alt='' />
        </a>
        {/* nav - initially hidden - show on desktop mode */}
        <div
          className='hidden lg:flex'
          data-aos='fade-down'
          data-aos-delay='1200'
        >
          <Nav />
        </div>
        {/* cta button - initially hidden - show on desktop mode */}
        {/* <a href='https://play.google.com/store/apps/details?id=com.nogozo.customer'>
        <button
          className='btn btn-sm btn-outline hidden lg:flex'
          data-aos='fade-down'
          data-aos-delay='1400'
        >
          <img src={GooglePlayIcon} style={{width:20}} className='mr-1' alt='' /> {btnText}
        </button></a> */}
        {/* mobile nav trigger btn - hidden on desktop */}
        <button className='lg:hidden' onClick={() => setMobileNav(!mobileNav)}>
          {mobileNav ? (
            <HiOutlineX className='text-3xl text-sky' />
          ) : (
            <HiMenuAlt4 className='text-3xl text-sky' />
          )}
        </button>
        {/* mobile nav - hidden on desktop */}
        <div
          className={`${
            mobileNav ? 'left-0' : '-left-full'
          }  fixed top-0 bottom-0 w-[60vw] lg:hidden transition-all`}
        >
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
