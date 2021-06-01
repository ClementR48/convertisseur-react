/* eslint-disable array-callback-return */
import React from 'react'
import PropTypes from 'prop-types'



const Currencies = ({
  currencies,
  state,
  search,
  setSearch
}) => { 
  
  return (
    <div className="currencies">
      <input
        type="text"
        placeholder="Recherche"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value)
        }}>
      </input>
      <ul>
        {currencies.map((currency) => (
         <li onClick={() => {
           state(currency.name)}} key={currency.name}>{currency.name}</li>
        ))}
      </ul>
    </div>
  )
}

Currencies.proptype = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}

export default Currencies
