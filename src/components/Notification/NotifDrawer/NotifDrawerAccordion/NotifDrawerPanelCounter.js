import ClassNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const NotifDrawerPanelCounter = ({ children, className, ...props }) => {
  const classes = ClassNames('panel-counter', className);

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};
NotifDrawerPanelCounter.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string
};
NotifDrawerPanelCounter.defaultProps = {
  className: ''
};

export default NotifDrawerPanelCounter;
