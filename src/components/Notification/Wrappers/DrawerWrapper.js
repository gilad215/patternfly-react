import React from 'react';
import PropTypes from 'prop-types';
import { NotifDrawer } from '../NotifDrawer/index';
import PanelWrapper from './PanelWrapper';

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
    />
  ));
  const noNotificationsMessage = (
    <div id="no-notifications-container">No Notifications</div>
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
  notificationPanels: PropTypes.array,
  toggleDrawerHide: PropTypes.func,
  toggleDrawerExpand: PropTypes.func,
  togglePanel: PropTypes.func,
  isExpanded: PropTypes.bool,
  onNotificationClick: PropTypes.func,
  onMarkPanelAsRead: PropTypes.func,
  onClickedLink: PropTypes.func,
  onMarkPanelAsClear: PropTypes.func
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
