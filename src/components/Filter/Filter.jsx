import { Component } from 'react';
import PropTypes from 'prop-types';
import { Label, FilterInput } from './Filter.styled';

class Filter extends Component {
  render() {
    const { filter, onChange } = this.props;
    return (
      <Label>
        Filter contacts by name
        <FilterInput
          type="text"
          value={filter}
          onChange={onChange}
          placeholder="Search contacts..."
        />
      </Label>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
