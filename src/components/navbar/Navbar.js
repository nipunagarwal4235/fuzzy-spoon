import React from 'react';

import { Link } from 'react-router-dom';

import Logo from '../../images/logo.jpg';
import SubHead from '../SubHead/SubHead';

function Navbar() {
  return (
    <div>
      <SubHead />
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img className="w-[200px]" src={Logo} alt="logo" />
          </Link>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link  to="/"  class="mr-5 hover:text-gray-900 cursor-pointer">Home</Link>
            <Link to="/"  class="mr-5 hover:text-gray-900 cursor-pointer">About US</Link>
            <Link to="/"  class="mr-5 hover:text-gray-900 cursor-pointer">Services</Link>
            <Link to="/"  class="mr-5 hover:text-gray-900 cursor-pointer">Newsroom</Link>
            <Link to="/"  class="mr-5 hover:text-gray-900 cursor-pointer">Gallery</Link>
            <Link to="/"  class="mr-5 hover:text-gray-900 cursor-pointer">Blog</Link>
            <Link to="/"  class="mr-5 hover:text-gray-900 cursor-pointer">Contact Us</Link>
            <Link  to="/" class="mr-5 hover:text-gray-900 cursor-pointer">Other</Link>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
