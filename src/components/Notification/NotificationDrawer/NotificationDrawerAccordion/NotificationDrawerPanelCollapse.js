import ClassNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const NotificationDrawerPanelCollapse = ({ children, className, ...props }) => {
  const classes = ClassNames('panel-collapse', className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
NotificationDrawerPanelCollapse.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string
};
NotificationDrawerPanelCollapse.defaultProps = {
  className: ''
};

export default NotificationDrawerPanelCollapse;
