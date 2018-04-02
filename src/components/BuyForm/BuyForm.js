import React from "react";
import DinningOptions from "./DinningOptions";
import './BuyForm.css'
import { isArray } from "util";

class BuyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOptions: [],
            startTime: "",
            endTime: "",
            price: 5.00,
            quantity: 1,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
            [name]: value
        });
    }
    
    handleSelectChange(event) {
        this.setState({
            selectedOptions: event,
        })
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.location);
        event.preventDefault();
    }

    render() {
        return (
            <div className="buy-container">
                <form>
                    <p>Dinning Option(s)</p>
                    <DinningOptions
                    value={this.state.selectedOptions}
                    onChange={this.handleSelectChange}
                    />
                    <p>Start Time - End Time</p>
                    <input 
                        type="time" 
                        name="startTime" 
                        value={this.state.startTime} 
                        onChange={this.handleInputChange} />
                    <input 
                        type="time" 
                        name="endTime" 
                        value={this.state.endTime} 
                        onChange={this.handleInputChange} />
                    <div className="option-flex">
                        <p>Price:</p>
                        <input 
                            className="numInput" 
                            name="price" 
                            value={this.state.price} 
                            type="number" 
                            step="0.1" 
                            max="15"
                            onChange={this.handleInputChange}/>
                        <p>Quantity:</p>
                        <input 
                            className="numInput" 
                            name="quantity" 
                            value={this.state.quantity} 
                            type="number" 
                            step="1" 
                            max="10"
                            onChange={this.handleInputChange}/>
                        <p>Yo Digits:</p>
                    </div>
                    <input className="submit" type="submit" value="Submit" onClick={(e) => this.handleSubmit(e)}/>
                </form>
            </div>
        )
    }
};

export default BuyForm;