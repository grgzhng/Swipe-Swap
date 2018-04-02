import React from 'react';
import './App.css';

import Titles from "./components/Titles";
import BuySellBtns from "./components/BuySellBtns";
import BuyForm from "./components/BuyForm/BuyForm"

const API_KEY = "";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBtns: true,
      buy: false,
      sell: false
    };
    this.handleBtnUnmount = this.handleBtnUnmount.bind(this);
    this.handleBtnMount = this.handleBtnMount.bind(this);
    this.switchBuy = this.switchBuy.bind(this);
    this.switchSell = this.switchSell.bind(this);
  }

  handleBtnUnmount(){
    this.setState({renderBtns: false});
  }
  handleBtnMount() {
    this.setState({renderBtns: true});
  }
  switchBuy() {
    this.setState({
      buy: true,
      sell: false
    })
  }
  switchSell() {
    this.setState({
      buy: false,
      sell: true
    })
  }

  renderForm() {
    if (this.state.buy) {
      return <BuyForm buy={this.switchBuy}/>
    }
    else {
      return <BuyForm buy={this.switchSell}/>
    }
  }

  render() {
    return (
      <div className="App">
        <Titles mountBtns={this.handleBtnMount} />
        {this.state.renderBtns ? <BuySellBtns unmountBtns={this.handleBtnUnmount} /> : this.renderForm()}
      </div>
    );
  }
}

export default App;
