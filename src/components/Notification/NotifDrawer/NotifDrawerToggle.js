import React from 'react';
import PropTypes from 'prop-types';
import { OverlayTrigger } from '../../OverlayTrigger';
import { Tooltip } from '../../Tooltip';
import { Icon } from '../../Icon';
import { Button } from '../../Button';

const NotifDrawerToggle = ({ hasUnreadMessages, onClick }) => {
  const iconName = hasUnreadMessages ? 'bell' : 'bell-o';
  const tooltip = <Tooltip id="tooltip">Notifications</Tooltip>;

  return (
    <OverlayTrigger
      placement="bottom"
      id="notifications-toggle-icon"
      overlay={tooltip}
    >
      <Button onClick={onClick} bsStyle="link">
        <Icon
          name={iconName}
          style={{ color: 'rgb(240, 240, 240)', marginTop: '20px' }}
          aria-describedby="tooltip"
          size="lg"
        />
      </Button>
    </OverlayTrigger>
  );
};
NotifDrawerToggle.propTypes = {
  /** has Unread Messages Bool */
  hasUnreadMessages: PropTypes.bool,
  /** onClick func */
  onClick: PropTypes.func
};
NotifDrawerToggle.defaultProps = {
  hasUnreadMessages: true,
  onClick: null
};

export default NotifDrawerToggle;
