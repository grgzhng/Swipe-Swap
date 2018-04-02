import React from "react";
import './buySellBtn.css';
import './btnFlex.css';

import BuyBtn from "./BuyBtn"; 
import SellBtn from "./SellBtn";

class BuySellBtns extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showBtns: false
        };
        this.removeBtns = this.removeBtns.bind(this);
      }

    removeBtns() {
        this.props.unmountBtns();
    }

    render() {
        return (
            
            // onClick={() => this.props.unmountBtns()}
            <div>
                <h3>What are you trying to do?</h3>
                <div className="btn-flex" >
                    <BuyBtn remove={this.removeBtns} />
                    <img src="https://image.flaticon.com/icons/svg/316/316648.svg" className="img"></img>
                    <SellBtn remove={this.removeBtns} />
                </div>
            </div>
        )
    }
};

export default BuySellBtns;