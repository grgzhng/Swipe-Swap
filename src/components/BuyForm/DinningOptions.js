import React from 'react';

import Select from 'react-select';

const DINNING_OPTIONS = [
	{ label: 'B-Plate', value: 'bplate' },
	{ label: 'Covel', value: 'covel' },
	{ label: 'De Neve', value: 'deneve' },
	{ label: 'Feast', value: 'feast' },
	{ label: 'Rende', value: 'rende' },
	{ label: 'Study', value: 'study' },
];

export default (props) => (
    <Select
      defaultValue={[]}
      isMulti
      name="options"
      options={DINNING_OPTIONS}
      value={props.value}
      onChange={props.onChange}
    />
);

