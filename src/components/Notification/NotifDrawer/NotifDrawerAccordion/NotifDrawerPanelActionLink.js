import ClassNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const NotifDrawerPanelActionLink = ({ children, className, ...props }) => {
  const classes = ClassNames('drawer-pf-action-link', className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
NotifDrawerPanelActionLink.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string
};
NotifDrawerPanelActionLink.defaultProps = {
  className: ''
};

export default NotifDrawerPanelActionLink;
