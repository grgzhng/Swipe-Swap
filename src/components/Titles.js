import React from "react";
import './title.css'


class Titles extends React.Component {
    render() {
        return (
            <div>
                <h1 onClick={() => this.props.mountBtns()} >Swipe Swap</h1>
            </div>
        )
    }
};

export default Titles;