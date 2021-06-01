import React from "react";
import Button from "./components/Button/Button";
import Currencies from "./components/Currencies/Currencies";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";


import currenciesList from "./data/data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open:true,
      baseAmout: 1,
      currency: "Australian Dollar",
      inputSearch: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.computeAmout = this.computeAmout.bind(this);
    this.handleClickCurrency = this.handleClickCurrency.bind(this);
    this.setInputSearch = this.setInputSearch.bind(this);
    this.getFilteredCurrencies = this.getFilteredCurrencies.bind(this);
    this.setInputMontant = this.setInputMontant.bind(this)
  }

  handleClickCurrency(newCurrency) { 
    this.setState({
      currency: newCurrency
    })
  }

  setInputSearch(newValue) {
    this.setState({
      inputSearch: newValue
    })
  }

  setInputMontant(newValue) {
    this.setState({
      baseAmout: newValue
    })
  }

  handleClick() {
    const { open } = this.state; 
    this.setState({
      open: !open,
    })
  }

  computeAmout = () => {
    const { baseAmout, currency } = this.state;
    const currencyData = currenciesList.find((data) => (data.name === currency));
    const result = currencyData.rate * baseAmout;
    return result
  }

  getFilteredCurrencies() {
    const{ inputSearch } = this.state;
    let filteredCurrencies = currenciesList
    if (inputSearch.length > 0) {
      filteredCurrencies = currenciesList.filter((currency) => {
        const minusculeInputSearch = inputSearch.toLowerCase();
        const minusculeCurrencyName = currency.name.toLowerCase();
        return minusculeCurrencyName.includes(minusculeInputSearch);
      })
    }
    return filteredCurrencies
  }


  render() {

    const { open, currency, inputSearch, baseAmout } = this.state;

    const result = this.computeAmout();

    const filteredCurrencies = this.getFilteredCurrencies();



    return (
      <div className="app">
       <Header montant={baseAmout} setMontant={this.setInputMontant}/>
       <Button
       open={open}
       manageClick={this.handleClick}
       />

       {open && <Currencies
       currencies={filteredCurrencies}
       state={this.handleClickCurrency}
       search={inputSearch}
       setSearch={this.setInputSearch} />}
       <Footer value={result} currency={currency} />
      </div>
    )
  }
}

export default App;
