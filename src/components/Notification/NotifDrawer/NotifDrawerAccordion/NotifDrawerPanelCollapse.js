import ClassNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const NotifDrawerPanelCollapse = ({
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
NotifDrawerPanelCollapse.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string,
  /** collapseIn Bool */
  collapseIn: PropTypes.bool
};
NotifDrawerPanelCollapse.defaultProps = {
  className: '',
  collapseIn: false
};

export default NotifDrawerPanelCollapse;
