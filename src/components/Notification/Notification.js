import ClassNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ expanded, children, unread, className, ...props }) => {
  const classes = ClassNames(
    'drawer-pf-notification',
    { unread },
    { 'expanded-notification': expanded },
    className
  );

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
Notification.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string,
  /** Unread Notification Bool */
  unread: PropTypes.bool,
  /** Expanded Bool */
  expanded: PropTypes.bool
};
Notification.defaultProps = {
  className: '',
  unread: false,
  expanded: false
};

export default Notification;
