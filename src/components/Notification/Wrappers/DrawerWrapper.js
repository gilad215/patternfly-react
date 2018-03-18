import React from 'react';
import PropTypes from 'prop-types';
import { NotificationDrawer } from '../NotificationDrawer/index';
import PanelWrapper from './PanelWrapper';
import { EmptyState, EmptyStateIcon, EmptyStateTitle } from '../../EmptyState';

const DrawerWrapper = ({
  notificationPanels,
  toggleDrawerHide,
  toggleDrawerExpand,
  isExpandable,
  isExpanded,
  togglePanel,
  onNotificationClick,
  onNotificationHide,
  onMarkPanelAsRead,
  onMarkPanelAsClear,
  onClickedLink
}) => {
  const panels = notificationPanels.map((panel, i) => (
    <PanelWrapper
      key={i}
      panelName={panel.panelName}
      panelkey={panel.panelkey}
      onClickedLink={onClickedLink}
      notifications={panel.notifications}
      togglePanel={togglePanel}
      isExpanded={panel.isExpanded}
      onNotificationClick={onNotificationClick}
      onNotificationHide={onNotificationHide}
      onMarkPanelAsRead={onMarkPanelAsRead}
      onMarkPanelAsClear={onMarkPanelAsClear}
      showLoading={panel.showLoading}
    />
  ));
  const noNotificationsMessage = (
    <EmptyState>
      <EmptyStateIcon name="info" />
      <EmptyStateTitle>No Notifications Available</EmptyStateTitle>
    </EmptyState>
  );

  return (
    <NotificationDrawer expanded={isExpanded}>
      <NotificationDrawer.Title
        title="Notifications"
        onCloseClick={() => toggleDrawerHide()}
        expandable={isExpandable}
        onExpandClick={toggleDrawerExpand}
      />
      <NotificationDrawer.Accordion>
        {panels.length === 0 ? noNotificationsMessage : panels}
      </NotificationDrawer.Accordion>
    </NotificationDrawer>
  );
};

DrawerWrapper.propTypes = {
  /** toggleDrawer Hide/Expand func */
  toggleDrawerExpand: PropTypes.func,
  toggleDrawerHide: PropTypes.func,
  /** Notification Panels Array */
  notificationPanels: PropTypes.array,
  /** is Expanded Bool */
  isExpanded: PropTypes.bool,
  /** on Notification Click Func */
  onNotificationClick: PropTypes.func,
  /** on MarkAllRead Click Func */
  onMarkPanelAsRead: PropTypes.func,
  /** on Dropdown Link Click Func */
  onClickedLink: PropTypes.func,
  /** on Notification Click Func */
  onNotificationHide: PropTypes.func,
  /** on MarkAllClear Click Func */
  onMarkPanelAsClear: PropTypes.func,
  /** on togglePanel Click Func */
  togglePanel: PropTypes.func,
  /** is Drawer Expandable */
  isExpandable: PropTypes.bool
};

DrawerWrapper.defaultProps = {
  notificationPanels: null,
  toggleDrawerHide: null,
  toggleDrawerExpand: null,
  togglePanel: null,
  isExpanded: false,
  onNotificationClick: null,
  onMarkPanelAsRead: null,
  onClickedLink: null,
  onNotificationHide: null,
  onMarkPanelAsClear: null,
  isExpandable: true
};

export default DrawerWrapper;
