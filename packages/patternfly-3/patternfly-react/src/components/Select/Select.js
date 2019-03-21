import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const Select = ({ label, value, onChange, options }) => (
  // options: options: { value: ?string, label: string }[]
  <FormGroup style={{ display: 'block' }}>
    <ControlLabel style={{ marginRight: 15, width: 55 }}>{label}</ControlLabel>
    <FormControl componentClass="select" value={value} onChange={evt => onChange(evt.target.value)}>
      {options.map(
        option =>
          option.value === 'seperator' ? (
            <option disabled>──────────</option>
          ) : (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          )
      )}
    </FormControl>
  </FormGroup>
);

Select.propTypes = {
  /** label */
  label: PropTypes.string,
  /** value */
  value: PropTypes.string,
  /** onChange func */
  onChange: PropTypes.func,
  /** options */
  options: PropTypes.array
};

Select.defaultProps = {
  label: '',
  value: '',
  onChange: Function.prototype,
  options: []
};

export default Select;
