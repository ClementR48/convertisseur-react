/* eslint-disable array-callback-return */
import React from 'react'
import PropTypes from 'prop-types'



const Currencies = ({ currencies, state }) => {
  
  return (
    <div className="currencies">
      <h2>Currencies</h2>
      <ul>
        {currencies.map((currency) => (
         <li onClick={() => {
           state(currency.name)}} key={currency.name}>{currency.name}</li>
        ))}
      </ul>
    </div>
  )
}

Currencies.prototype = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}

export default Currencies
