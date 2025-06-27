import React from 'react';
import icon13 from '../../assets/call.png'
import icon14 from '../../assets/email.png'

export const Footer = () => {
  return (
    <footer className='border-t-2 border-green-800 bg-black text-white p-4 md:p-10'>
      <div className='container mx-auto flex flex-col md:flex-row gap-8 md:justify-evenly'> 
        <div className='flex flex-col'>
          <h1 className='text-3xl md:text-4xl font-bold'>FREESTYLE</h1>
          <div className='text-base md:text-xl mt-5 font-light'>
            <p className='mt-4'>© 2025 Freestyle. All rights reserved.</p>
            <p className='mt-2 max-w-xs'>
              We're a creative team of freelancers, designers, and developers delivering impactful brand and web solutions for businesses of all sizes.
            </p>
          </div>
        </div>

        <div className='flex flex-col'>
          <h2 className='text-3xl md:text-4xl font-bold'>CATEGORIES</h2>
          <div className='text-base md:text-xl mt-5 font-light'>
            <a href='#'><p className='mt-2'>Hire a freelancer</p></a>
            <a href='#'><p className='mt-2'>Earn as a client</p></a>
          </div>
        </div>

        <div className='flex flex-col'>
          <h1 className='text-3xl md:text-4xl font-bold'>CONTACT US</h1>
          <div className='text-base md:text-xl mt-5 flex items-center gap-3 font-light'>
            <img src={icon13} alt="call icon" className="h-4" />
            <p>9851654511</p>
          </div>

          <div className='text-base md:text-xl mt-2 flex items-center gap-3 font-light'>
            <img src={icon14} alt="email icon" className="h-4" />
            <p>GraphicFreeStyle@gmail.com</p> 
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;