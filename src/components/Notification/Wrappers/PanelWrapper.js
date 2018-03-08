import ClassNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'react-bootstrap';
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
  onMarkPanelAsClear,
  showLoading
}) => {
  const classes = ClassNames({ expanded: isExpanded }, className);
  const unreadCount = notifications.filter(notification => notification.unread)
    .length;

  const getUnread = () => {
    if (unreadCount !== 1) return `${unreadCount} New Events`;
    return '1 New Event';
  };

  const renderNotifications = notifications.map((notification, i) => (
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
          onClick={() => onNotificationClick(panelkey, notification.nkey)}
        >
          {notification.text}
        </Notification.Message>
        <Notification.Info date={notification.date} time={notification.time} />
      </Notification.Content>
    </Notification>
  ));
  const renderClearReadButtons = (
    <NotifDrawer.PanelAction key={panelkey}>
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
  );
  const renderClearButton = (
    <NotifDrawer.PanelAction key={panelkey}>
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
  );

  return (
    <NotifDrawer.Panel className={classes}>
      <NotifDrawer.PanelHeading onClick={() => togglePanel(panelkey)}>
        <NotifDrawer.PanelTitle>
          <a className={isExpanded ? '' : 'collapsed'}>{panelName}</a>
        </NotifDrawer.PanelTitle>
        <NotifDrawer.PanelCounter>{getUnread()}</NotifDrawer.PanelCounter>
      </NotifDrawer.PanelHeading>
      <Collapse in={isExpanded}>
        <NotifDrawer.PanelCollapse
          aria-expanded="true"
          id={panelkey}
          collapseIn={isExpanded}
        >
          <NotifDrawer.PanelBody>
            {notifications.length > 0 ? (
              [
                showLoading
                  ? [
                      renderNotifications,
                      <Notification key="loading" loading />
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
          </NotifDrawer.PanelBody>
        </NotifDrawer.PanelCollapse>
      </Collapse>
    </NotifDrawer.Panel>
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
  onMarkPanelAsClear: null,
  togglePanel: null,
  showLoading: false
};

export default PanelWrapper;
