import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import BodySection from '../BodySection/BodySection';

export default class BodySectionWithMarginBottom extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
      <div className={css(styles.bodySectionWithMargin)}>
        <BodySection {...this.props} />
      </div>
      </>
    );
  }
}

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: 40,
  }
});

BodySectionWithMarginBottom.defaultProps = {
  title: ''
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string
}
