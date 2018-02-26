import ClassNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const NotificationInfo = ({ time, date, className, ...props }) => {
  const classes = ClassNames('drawer-pf-notification-info', className);

  return (
    <div className={classes}>
      <span className="date">{date}</span>
      <span className="time">{time}</span>
    </div>
  );
};
NotificationInfo.propTypes = {
  /** Additional element css classes */
  className: PropTypes.string,
  /** Date and Time Strings */
  date: PropTypes.string,
  time: PropTypes.string
};
NotificationInfo.defaultProps = {
  className: '',
  date: '',
  time: ''
};

export default NotificationInfo;
