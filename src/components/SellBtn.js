import React from "react";
import './buySellBtn.css';

class SellBtn extends React.Component {
    render() {
        return (
            <div>
                <button className="sellBtn" onClick={() => this.props.remove()}>Sell</button>
            </div>
        )
    }
};

export default SellBtn;