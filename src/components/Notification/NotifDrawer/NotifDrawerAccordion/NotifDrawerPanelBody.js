import ClassNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const NotificationDrawerPanelTitle = ({ children, className, ...props }) => {
  const classes = ClassNames('panel-body', className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
NotificationDrawerPanelTitle.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string
};
NotificationDrawerPanelTitle.defaultProps = {
  className: ''
};

export default NotificationDrawerPanelTitle;
