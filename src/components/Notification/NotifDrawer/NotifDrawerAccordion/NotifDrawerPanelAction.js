import ClassNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const NotifDrawerPanelAction = ({ children, className, ...props }) => {
  const classes = ClassNames('drawer-pf-action', className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
NotifDrawerPanelAction.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string
};
NotifDrawerPanelAction.defaultProps = {
  className: ''
};

export default NotifDrawerPanelAction;
