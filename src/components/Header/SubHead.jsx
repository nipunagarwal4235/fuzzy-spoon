import React from 'react';

import { Link } from 'react-router-dom';

const SubHead = () => {
  return (
    <>
    <div className='flex justify-around items-center bg-[#1e82b6] text-white text-sm h-16'>
        <div className='flex '>
            <p>IND</p>
            <i className="fi fi-sr-phone-call mx-2"></i>
            <a href="tel:+44-785-7895">+44-785-7895</a>
        </div>
        <div className='flex'>
            <p>USA</p>
            <i className="fi fi-sr-phone-call mx-2"></i>
            <a href="tel:+44-785-7895">+44-785-7895</a>
        </div>
        <div className='flex'>
            <p>UK</p>
            <i className="fi fi-sr-phone-call mx-2"></i>
            <a href="tel:+44-785-7895">+44-785-7895</a>
        </div>
        <div className="flex items-center gap-x-1">
            <Link to="/">
                <i className="fi fi-brands-facebook text-lg mx-1"></i>
            </Link>
            <Link to="/">
                <i className="fi fi-brands-instagram text-lg mx-1"></i>
            </Link>
            <Link to="/">
                <i className="fi fi-brands-linkedin text-lg mx-1"></i>
            </Link>
            <Link to="/">
                <i className="fi fi-brands-twitter text-lg mx-1"></i>
            </Link>
            <Link to="/">
                <i className="fi fi-brands-youtube text-lg mx-1"></i>
            </Link>
            <Link to="/">
                <i className="fi fi-brands-whatsapp text-lg mx-1"></i>
            </Link>
        </div>
    </div>
    {/* <header class=" bg-[#1e82b6] text-white body-font">
      <div class="container flex flex-wrap  p-5  flex-col md:flex-row items-center justify-between">
        <a class="flex  items-centermb-4 md:mb-0 mx-10">
          <div className="flex  text-white ">
            <p>IND</p>
            <i className="fi fi-sr-phone-call mx-2"></i>
            <a href="tel:+44-785-7895">+44-785-7895</a>
          </div>
        </a>
        <a class="flex  items-center  mb-4 md:mb-0 mx-10">
        <div className='flex  text-white'>
            <p>USA</p>
            <i className="fi fi-sr-phone-call mx-2"></i>
            <a href="tel:+44-785-7895">+44-785-7895</a>
        </div>
        </a>
        <a class="flex  items-center  mb-4 md:mb-0 mx-10">
        <div className='flex  text-white'>
            <p>UK</p>
            <i className="fi fi-sr-phone-call mx-2"></i>
            <a href="tel:+44-785-7895">+44-785-7895</a>
        </div>
        </a>
        <a class="flex   items-center mb-4 md:mb-0 mx-10 ">
          <div className="flex  text-white ">
            <p>IND</p>
            <i className="fi fi-sr-phone-call mx-2"></i>
            <a href="tel:+44-785-7895">+44-785-7895</a>
          </div>
        </a>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-end gap-x-10">
            <Link to="/">
                <i className="fi fi-brands-facebook text-lg mx-1"></i>
            </Link>
            <Link to="/">
                <i className="fi fi-brands-instagram text-lg mx-1"></i>
            </Link>
            <Link to="/">
                <i className="fi fi-brands-linkedin text-lg mx-1"></i>
            </Link>
            <Link to="/">
                <i className="fi fi-brands-twitter text-lg mx-1"></i>
            </Link>
            <Link to="/">
                <i className="fi fi-brands-youtube text-lg mx-1"></i>
            </Link>
            <Link to="/">
                <i className="fi fi-brands-whatsapp text-lg mx-1"></i>
            </Link>
        </nav>
      </div>
    </header> */}
    </>
  );
};

export default SubHead;
