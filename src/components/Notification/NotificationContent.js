import ClassNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const NotificationContent = ({ children, className, ...props }) => {
  const classes = ClassNames('drawer-pf-notification-content', className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
NotificationContent.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string
};
NotificationContent.defaultProps = {
  className: ''
};

export default NotificationContent;
