import React from 'react';


const Header = ({ montant, setMontant }) => {
  return (
    <div className="header">
      <h1>
        Converter
      </h1>
      <p>
        <input value={montant} onChange={(event) => {
          setMontant(event.target.value);
        }} type="number" placeholder="Montant"></input> euros
      </p>
      
    </div>
  );
};

export default Header;