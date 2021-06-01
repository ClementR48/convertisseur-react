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
    };

    this.handleClick = this.handleClick.bind(this);
    this.computeAmout = this.computeAmout.bind(this);
    this.handleClickCurrency = this.handleClickCurrency.bind(this)
  }

  handleClickCurrency(newCurrency) { 
    this.setState({
      currency: newCurrency
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
    console.log(currencyData);
    const result = currencyData.rate * baseAmout;
    return result
  }


  render() {

    const { open, currency } = this.state;

    const result = this.computeAmout();
    return (
      <div className="app">
       <Header />
       <Button open={open} manageClick={this.handleClick} />
       {open && <Currencies currencies={currenciesList} state={this.handleClickCurrency}/>}
       <Footer value={result} currency={currency} />
      </div>
    )
  }
}

export default App;
