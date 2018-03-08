import React from 'react';
import PropTypes from 'prop-types';
import { NotifDrawer } from '../NotifDrawer/index';
import PanelWrapper from './PanelWrapper';
import { EmptyState, EmptyStateIcon, EmptyStateTitle } from '../../EmptyState';

const DrawerWrapper = ({
  notificationPanels,
  toggleDrawerHide,
  toggleDrawerExpand,
  isExpanded,
  togglePanel,
  onNotificationClick,
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
      notifications={panel.notifs}
      togglePanel={togglePanel}
      isExpanded={panel.isExpanded}
      onNotificationClick={onNotificationClick}
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
    <NotifDrawer expanded={isExpanded}>
      <NotifDrawer.Title
        title="Notifications"
        onCloseClick={() => toggleDrawerHide()}
        onExpandClick={toggleDrawerExpand}
      />
      <NotifDrawer.Accordion>
        {panels.length === 0 ? noNotificationsMessage : panels}
      </NotifDrawer.Accordion>
    </NotifDrawer>
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
  /** on MarkAllClear Click Func */
  onMarkPanelAsClear: PropTypes.func,
  /** on togglePanel Click Func */
  togglePanel: PropTypes.func
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
  onMarkPanelAsClear: null
};

export default DrawerWrapper;
