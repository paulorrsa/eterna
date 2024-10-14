import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";


function Social() {
    return (
        <div className='bg-[#000000] text-white h-8 flex items-center justify-end '>
            <ul className='flex gap-3 flex-wrap  items-end m-4'>
                <li><a href="https://www.instagram.com/eterna.software/" target="_blank" rel="noopener noreferrer"  ><FaInstagram /></a></li>
                <li><MdOutlineEmail /></li>
                <li><FaWhatsapp /></li>
                <li><FaXTwitter /></li>
            </ul>
        </div>
    )
}

export default Social;