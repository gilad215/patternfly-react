import ClassNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner/Spinner';

const Notification = ({
  loading,
  expanded,
  children,
  unread,
  className,
  ...props
}) => {
  const classes = ClassNames(
    'drawer-pf-notification',
    { unread },
    { 'expanded-notification': expanded },
    className
  );

  if (loading) {
    return (
      <div className="drawer-pf-notification text-center">
        <Spinner inline loading size="xs" /> Loading More
      </div>
    );
  }
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
Notification.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node,
  /** Additional element css classes */
  className: PropTypes.string,
  /** Unread Notification Bool */
  unread: PropTypes.bool,
  /** Expanded Bool */
  expanded: PropTypes.bool,
  /** show Loading Notification */
  loading: PropTypes.bool
};
Notification.defaultProps = {
  children: null,
  className: '',
  unread: false,
  expanded: false,
  loading: false
};

export default Notification;
