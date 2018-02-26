import ClassNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Notification } from '../index';
import { NotifDrawer } from '../NotifDrawer/index';
import { Icon } from '../../Icon';
import { Button } from '../../Button';
import { MenuItem } from '../../MenuItem';
import { EmptyState, EmptyStateTitle, EmptyStateIcon } from '../../../index';

const PanelWrapper = ({
  panelkey,
  panelName,
  className,
  notifications,
  isExpanded,
  togglePanel,
  onNotificationClick,
  onMarkPanelAsRead,
  onClickedLink,
  onMarkPanelAsClear
}) => {
  const classes = ClassNames({ expanded: isExpanded }, className);
  const unreadCount = notifications.filter(notification => notification.unread)
    .length;

  const getUnread = () => {
    if (unreadCount !== 1) return `${unreadCount} New Events`;
    return '1 New Event';
  };
  return (
    <NotifDrawer.Panel className={classes}>
      <NotifDrawer.PanelHeading onClick={() => togglePanel(panelkey)}>
        <NotifDrawer.PanelTitle>
          <a className={isExpanded ? '' : 'collapsed'}>{panelName}</a>
        </NotifDrawer.PanelTitle>
        <NotifDrawer.PanelCounter>{getUnread()}</NotifDrawer.PanelCounter>
      </NotifDrawer.PanelHeading>
      {isExpanded && (
        <NotifDrawer.PanelCollapse
          collapseIn
          aria-expanded="true"
          id="fixedCollapseOne"
        >
          <NotifDrawer.PanelBody>
            {notifications.length > 0 ? (
              notifications.map((notification, i) => (
                <Notification
                  key={i}
                  expanded={notification.expanded}
                  unread={notification.unread}
                >
                  <NotifDrawer.Dropdown pullRight id={notification.dropdownid}>
                    {notification.dropdown.map((link, j) => (
                      <MenuItem
                        key={j}
                        id={`notification-kebab-${i}`}
                        onClick={onClickedLink}
                      >
                        {link.title}
                      </MenuItem>
                    ))}
                  </NotifDrawer.Dropdown>
                  <Icon
                    className="pull-left"
                    type={notification.icon.type}
                    name={notification.icon.name}
                  />
                  <Notification.Content>
                    <Notification.Message
                      onClick={() =>
                        onNotificationClick(panelkey, notification.nkey)
                      }
                    >
                      {notification.text}
                    </Notification.Message>
                    <Notification.Info
                      date={notification.date}
                      time={notification.time}
                    />
                  </Notification.Content>
                </Notification>
              ))
            ) : (
              <EmptyState>
                <EmptyStateIcon name="info" />
                <EmptyStateTitle>No Notifications Available</EmptyStateTitle>
              </EmptyState>
            )}
            {notifications.length > 0 &&
              unreadCount > 0 && (
                <NotifDrawer.PanelAction>
                  <NotifDrawer.PanelActionLink
                    className="drawer-pf-action-link"
                    data-toggle="mark-all-read"
                    onClick={() => onMarkPanelAsRead(panelkey)}
                  >
                    <Button bsStyle="link">Mark All Read</Button>
                  </NotifDrawer.PanelActionLink>
                  <NotifDrawer.PanelActionLink
                    data-toggle="clear-all"
                    onClick={() => onMarkPanelAsClear(panelkey)}
                  >
                    <Button bsStyle="link">
                      <Icon type="pf" name="close" />
                      Clear All
                    </Button>
                  </NotifDrawer.PanelActionLink>
                </NotifDrawer.PanelAction>
              )}
            {notifications.length > 0 &&
              unreadCount === 0 && (
                <NotifDrawer.PanelAction>
                  <NotifDrawer.PanelActionLink
                    data-toggle="clear-all"
                    onClick={() => onMarkPanelAsClear(panelkey)}
                  >
                    <Button bsStyle="link">
                      <Icon type="pf" name="close" />
                      Clear All
                    </Button>
                  </NotifDrawer.PanelActionLink>
                </NotifDrawer.PanelAction>
              )}
          </NotifDrawer.PanelBody>
        </NotifDrawer.PanelCollapse>
      )}
    </NotifDrawer.Panel>
  );
};

PanelWrapper.propTypes = {
  panelkey: PropTypes.string,
  panelName: PropTypes.string,
  className: PropTypes.string,
  notifications: PropTypes.array,
  isExpanded: PropTypes.bool,
  onNotificationClick: PropTypes.func,
  onMarkPanelAsRead: PropTypes.func,
  onClickedLink: PropTypes.func,
  onMarkPanelAsClear: PropTypes.func,
  togglePanel: PropTypes.func
};
PanelWrapper.defaultProps = {
  panelkey: '1',
  notifications: PropTypes.array,
  isExpanded: false,
  className: null,
  panelName: null,
  onNotificationClick: null,
  onMarkPanelAsRead: null,
  onClickedLink: null,
  onMarkPanelAsClear: null,
  togglePanel: null
};

export default PanelWrapper;
