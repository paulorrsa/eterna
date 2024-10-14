import React from 'react';
import { Link } from 'react-router-dom';

function Button({texto , to}) {
  return (
    <div className='flex'>
        <Link className='uppercase mt-4 px-8 py-3 rounded-md bg-teal-400 text-neutral-700 font-semibold hover:text-purple-950' to={to}>{texto}</Link>
    </div>
  )
}

export default Button; 