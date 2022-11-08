import React from 'react'
import { Link } from 'react-router-dom';

const SubHead = () => {
    return (
        <div className='flex justify-around items-center bg-[#5356fb] text-white text-sm h-12'>
            <div className='flex'>
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
            <div className="flex items-center">
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
    )
}

export default SubHead;