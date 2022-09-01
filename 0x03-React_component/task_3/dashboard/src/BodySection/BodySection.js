import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class BodySection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, children } = this.props;
    return (
      <>
      <div className='bodySection'>
        <h2>{title}</h2>
        {children}
      </div>
      </>
    );
  }
}

BodySection.defaultProps = {
  title: ''
}

BodySection.propTypes = {
  title: PropTypes.string
}
