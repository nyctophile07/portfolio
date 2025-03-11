import React from 'react';

function Exp() {
  return (
    <>
      <div className="iframe-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1592080.245662321!2d86.29055094315008!3d22.054290291878697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02753daab4d2d3%3A0x440878f90d55926d!2sAccenture!5e0!3m2!1sen!2sin!4v1741721170708!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className='text-white flex gap-3 text-[5.4vmin]'>
        <div className='flex gap-2'>
          <div className='exp-active my-auto inline-block w-[6vmin] bg-green-500 rounded-full h-[6vmin]'></div>
          <span className='font-[300]'>Currently working at </span>
        </div>
        <span className='text-pink-400 font-bold'>Accenture</span>
      </div>
      <div className='text-white ml-10 text-lg italic p-5 font-italic text-[3vmin]'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It's truly an incredible opportunity to launch my career with a prestigious company like Accenture as Application development associate.
      </div>
    </>
  );
}

export default Exp;