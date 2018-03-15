import ClassNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const NotificationDrawerPanelCollapse = ({
  collapseIn,
  children,
  className,
  ...props
}) => {
  const classes = ClassNames(
    'panel-collapse',
    { 'collapse in': collapseIn },
    className
  );

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
  className: PropTypes.string,
  /** collapseIn Bool */
  collapseIn: PropTypes.bool
};
NotificationDrawerPanelCollapse.defaultProps = {
  className: '',
  collapseIn: false
};

export default NotificationDrawerPanelCollapse;
