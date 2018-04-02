import React from "react";
import './buySellBtn.css';

class BuyBtn extends React.Component {

    render() {
        return (
            <div>
                <button className="buyBtn" onClick={() => this.props.remove()}>Buy</button>
            </div>
        )
    }
};

export default BuyBtn;