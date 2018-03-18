import ClassNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'react-bootstrap';
import { Notification } from '../index';
import { NotificationDrawer } from '../NotificationDrawer/index';
import { Icon } from '../../Icon';
import { Button } from '../../Button';
import { MenuItem } from '../../MenuItem';
import { EmptyState, EmptyStateTitle, EmptyStateIcon } from '../../../index';
import getIconClass from './Icon.consts';

const PanelWrapper = ({
  panelkey,
  panelName,
  className,
  notifications,
  isExpanded,
  togglePanel,
  onNotificationClick,
  onNotificationHide,
  onMarkPanelAsRead,
  onClickedLink,
  onMarkPanelAsClear,
  showLoading
}) => {
  const classes = ClassNames({ expanded: isExpanded }, className);
  const unreadCount = notifications.filter(notification => !notification.seen)
    .length;

  const getUnread = () => {
    if (unreadCount !== 1) return `${unreadCount} New Events`;
    return '1 New Event';
  };

  const renderNotifications = notifications.map((notification, i) => (
    <Notification key={i} seen={notification.seen}>
      <NotificationDrawer.Dropdown pullRight id={i}>
        {notification.actions.links.map((link, j) => (
          <MenuItem
            key={j}
            id={`notification-kebab-${j}`}
            onClick={() => onClickedLink(link.href)}
          >
            {link.title}
          </MenuItem>
        ))}
        <MenuItem divider />
        <MenuItem
          id="notification-kebab-hide"
          onClick={() => onNotificationHide(panelkey, notification.id)}
        >
          Hide this notification
        </MenuItem>
      </NotificationDrawer.Dropdown>
      <Icon
        className="pull-left"
        type="pf"
        name={getIconClass(notification.level)}
      />
      <Notification.Content>
        <Notification.Message
          onClick={() => onNotificationClick(panelkey, notification.id)}
        >
          {notification.text}
        </Notification.Message>
        <Notification.Info
          date={new Date(notification.created_at).toLocaleDateString()}
          time={new Date(notification.created_at).toLocaleTimeString()}
        />
      </Notification.Content>
    </Notification>
  ));
  const renderClearReadButtons = (
    <NotificationDrawer.PanelAction key={panelkey}>
      <NotificationDrawer.PanelActionLink
        className="drawer-pf-action-link"
        data-toggle="mark-all-read"
        onClick={() => onMarkPanelAsRead(panelkey)}
      >
        <Button bsStyle="link">Mark All Read</Button>
      </NotificationDrawer.PanelActionLink>
      <NotificationDrawer.PanelActionLink
        data-toggle="clear-all"
        onClick={() => onMarkPanelAsClear(panelkey)}
      >
        <Button bsStyle="link">
          <Icon type="pf" name="close" />
          Clear All
        </Button>
      </NotificationDrawer.PanelActionLink>
    </NotificationDrawer.PanelAction>
  );
  const renderClearButton = (
    <NotificationDrawer.PanelAction key={panelkey}>
      <NotificationDrawer.PanelActionLink
        data-toggle="clear-all"
        onClick={() => onMarkPanelAsClear(panelkey)}
      >
        <Button bsStyle="link">
          <Icon type="pf" name="close" />
          Clear All
        </Button>
      </NotificationDrawer.PanelActionLink>
    </NotificationDrawer.PanelAction>
  );

  return (
    <NotificationDrawer.Panel className={classes}>
      <NotificationDrawer.PanelHeading onClick={() => togglePanel(panelkey)}>
        <NotificationDrawer.PanelTitle>
          <a className={isExpanded ? '' : 'collapsed'}>{panelName}</a>
        </NotificationDrawer.PanelTitle>
        <NotificationDrawer.PanelCounter>
          {getUnread()}
        </NotificationDrawer.PanelCounter>
      </NotificationDrawer.PanelHeading>
      <Collapse in={isExpanded}>
        <NotificationDrawer.PanelCollapse
          aria-expanded="true"
          id={panelkey}
          collapseIn={isExpanded}
        >
          <NotificationDrawer.PanelBody>
            {notifications.length > 0 ? (
              [
                showLoading
                  ? [
                      renderNotifications,
                      <Notification key="loading" type="loading" />
                    ]
                  : renderNotifications,
                unreadCount > 0 ? renderClearReadButtons : renderClearButton
              ]
            ) : (
              <EmptyState>
                <EmptyStateIcon name="info" />
                <EmptyStateTitle>No Notifications Available</EmptyStateTitle>
              </EmptyState>
            )}
          </NotificationDrawer.PanelBody>
        </NotificationDrawer.PanelCollapse>
      </Collapse>
    </NotificationDrawer.Panel>
  );
};

PanelWrapper.propTypes = {
  /** Panel Key,Name */
  panelkey: PropTypes.string,
  panelName: PropTypes.string,
  className: PropTypes.string,
  /** Notification Panels Array */
  notifications: PropTypes.array,
  /** is Expanded Bool */
  isExpanded: PropTypes.bool,
  /** on Notification Click Func */
  onNotificationClick: PropTypes.func,
  /** on MarkAllRead Click Func */
  onMarkPanelAsRead: PropTypes.func,
  /** on Dropdown Link Click Func */
  onClickedLink: PropTypes.func,
  /** Notification Hide func */
  onNotificationHide: PropTypes.func,
  /** on MarkAllClear Click Func */

  onMarkPanelAsClear: PropTypes.func,
  /** on togglePanel Click Func */
  togglePanel: PropTypes.func,
  /** show Loading notification Bool */
  showLoading: PropTypes.bool
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
  onNotificationHide: null,
  onMarkPanelAsClear: null,
  togglePanel: null,
  showLoading: false
};

export default PanelWrapper;
