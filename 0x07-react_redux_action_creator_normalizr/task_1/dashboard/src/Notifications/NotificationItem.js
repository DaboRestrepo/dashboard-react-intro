import React, { PureComponent } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes, { number } from 'prop-types';

export default class NotificationItem extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { type, html, value, markAsRead, id } = this.props;
    let li;
    if (type === 'urgent') {
      value
      ? (li = <li className={css(styles.urgent, styles.general)} data-notification-type={type} onClick={() => {markAsRead(id)}}>{value}</li>)
      : (li = <li className={css(styles.urgent, styles.general)} data-notification-type={type} dangerouslySetInnerHTML={html} onClick={() => {markAsRead(id)}}></li>)
    } else {
      value
      ? (li = <li className={css(styles.default, styles.general)} data-notification-type={type} onClick={() => {markAsRead(id)}}>{value}</li>)
      : (li = <li className={css(styles.default, styles.general)} data-notification-type={type} dangerouslySetInnerHTML={html} onClick={() => {markAsRead(id)}}></li>)
    }
    return li;
  }
}

const styles = StyleSheet.create({
  urgent: {
    color: 'red',
  },
  default: {
    color: 'blue',
  },
  general: {
    '@media (max-width: 900px)': {
      listStyle: 'none',
      width: '100%',
      borderBottom: '1px solid black',
      fontSize: 20,
      padding: '10px 8px',
    }
  }
});

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  html: {},
  markAsRead: () => {},
  id: NaN
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
  id: number
}
