import ClassNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const NotifDrawerTitle = ({
  onCloseClick,
  onExpandClick,
  title,
  children,
  className,
  ...props
}) => {
  const classes = ClassNames('drawer-pf-title', className);

  return (
    <div className={classes} {...props}>
      <a
        onClick={onExpandClick}
        className="drawer-pf-toggle-expand fa fa-angle-double-left hidden-xs"
      />
      <a
        onClick={onCloseClick}
        className="drawer-pf-close pficon pficon-close"
      />
      <h3 className="text-center">{title}</h3>
      {children}
    </div>
  );
};
NotifDrawerTitle.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node,
  /** Additional element css classes */
  className: PropTypes.string,
  /** Title prop */
  title: PropTypes.string,
  /** Close/Expand Functions */
  onCloseClick: PropTypes.func,
  onExpandClick: PropTypes.func
};
NotifDrawerTitle.defaultProps = {
  className: '',
  title: 'Notifications',
  onCloseClick: null,
  onExpandClick: null,
  children: null
};

export default NotifDrawerTitle;
