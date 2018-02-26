import ClassNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const NotificationDrawerPanelHeading = ({ children, className, ...props }) => {
  const classes = ClassNames('panel-heading', className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
NotificationDrawerPanelHeading.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string
};
NotificationDrawerPanelHeading.defaultProps = {
  className: ''
};

export default NotificationDrawerPanelHeading;
