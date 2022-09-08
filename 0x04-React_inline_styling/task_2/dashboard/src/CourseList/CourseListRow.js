import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

export default function CourseListRow({
  isHeader,
  textFirstCell,
  textSecondCell
}) {
  const rowColor = { background: '#f5f5f5ab' };
  const headerColor = { background: '#deb5b545' };
  let elem = undefined;
  let backColor = undefined;

  if (isHeader === true) {
    if (textSecondCell === null) {
      elem = (
        <>
          <th colSpan='2' className={css(styles.thCol)}>{textFirstCell}</th>
        </>
      );
    } else {
      elem = (
        <>
          <th className={css(styles.th)}>{textFirstCell}</th>
          <th className={css(styles.th)}>{textSecondCell}</th>
        </>
      );
    }
  } else {
    elem = (
      <>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </>
    );
  }

  (isHeader) 
  ? backColor = headerColor
  : backColor = rowColor;

  return <tr style={backColor}>{elem}</tr>;
}

const styles = StyleSheet.create({
  thCol: {
    textAlign: 'center',
  },
  th: {
    borderTop: '1px solid grey',
    borderBottom: '1px solid grey',
    textAlign: 'left',
    fontSize: 18, 
  }
});

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
