import ClassNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const NotificationDrawerPanel = ({ children, className, ...props }) => {
  const classes = ClassNames('panel panel-default', className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
NotificationDrawerPanel.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string
};
NotificationDrawerPanel.defaultProps = {
  className: ''
};

export default NotificationDrawerPanel;
