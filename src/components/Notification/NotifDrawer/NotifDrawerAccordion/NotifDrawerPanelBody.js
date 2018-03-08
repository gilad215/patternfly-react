import ClassNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const NotifDrawerPanelBody = ({ children, className, ...props }) => {
  const classes = ClassNames('panel-body', className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
NotifDrawerPanelBody.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string
};
NotifDrawerPanelBody.defaultProps = {
  className: ''
};

export default NotifDrawerPanelBody;
