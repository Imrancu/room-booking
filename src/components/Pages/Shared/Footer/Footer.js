import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p className='text-center text-gray-700'>
        <small>All Copyright &#169; reserved for Room Booking, {new Date().getFullYear()} </small>
      </p>
    </footer>
  );
};

export default Footer;