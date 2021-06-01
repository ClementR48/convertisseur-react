import React from 'react';

const Footer = ({ value, currency }) => {
  return (
    <div className="footer">
      <p>{value}</p>
      <p>{currency}</p>
    </div>
  );
};

export default Footer;