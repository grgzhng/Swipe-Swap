import React from 'react';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

const DINNING_OPTIONS = [
	{ label: 'B-Plate', value: 'bplate' },
	{ label: 'Covel', value: 'covel' },
	{ label: 'De Neve', value: 'deneve' },
	{ label: 'Feast', value: 'feast' },
	{ label: 'Rende', value: 'rende' },
	{ label: 'Study', value: 'study' },
];

class DinningOption extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: '',
        };
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    handleSelectChange (value) {
		this.setState({
            selectedOption: value,
        });
        // alert(this.state.selectedOption[0].label)
    }

    render() {
        const { selectedOption } = this.state.selectedOption;
        const value = selectedOption;

        return (
            <Select
                name="location"
                value={value}
                onChange={
                    this.props.selectChange(value),
                    this.handleSelectChange(value)}
                options={DINNING_OPTIONS}
                multi
                placeholder="Where to?"
            />
        )
    }
};

export default DinningOption;
