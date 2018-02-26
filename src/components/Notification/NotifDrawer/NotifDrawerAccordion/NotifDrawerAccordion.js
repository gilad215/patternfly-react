import ClassNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const NotificationDrawerAccordion = ({ children, className, ...props }) => {
  const classes = ClassNames('panel-group', className);

  return (
    <div className={classes} id="notification-drawer-accordion" {...props}>
      {children}
    </div>
  );
};
NotificationDrawerAccordion.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string
};
NotificationDrawerAccordion.defaultProps = {
  className: ''
};

export default NotificationDrawerAccordion;
