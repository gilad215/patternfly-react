import React from 'react';
import PropTypes from 'prop-types';
import { NotifDrawerToggle } from '../NotifDrawer/index';
import DrawerWrapper from './DrawerWrapper';

class StatefulDrawerWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      panels: props.panels,
      isDrawerOpen: props.isDrawerOpen,
      hasUnreadMessages: props.hasUnreadMessages,
      isExpanded: props.isExpanded
    };
  }

  onMarkPanelAsRead = panelkey => {
    const panels = this.state.panels.map(panel => {
      if (panel.panelkey === panelkey) {
        panel.notifs.map(notification => {
          notification.unread = false;
          return notification;
        });
      }
      return panel;
    });
    this.setState({ panels, hasUnreadMessages: this.updateUnreadCount() });
  };

  onMarkPanelAsClear = key => {
    const panels = this.state.panels.map(panel => {
      if (panel.panelkey === key) panel.notifs = [];
      return panel;
    });
    this.setState({ panels, hasUnreadMessages: this.updateUnreadCount() });
  };

  onNotificationClick = (panelkey, nkey) => {
    const panels = this.state.panels.map(panel => {
      if (panel.panelkey === panelkey) {
        panel.notifs.map(notification => {
          if (notification.nkey === nkey) notification.unread = false;
          return notification;
        });
      }
      return panel;
    });
    this.setState({ panels, hasUnreadMessages: this.updateUnreadCount() });
  };

  togglePanel = key => {
    const panels = this.state.panels.map(panel => {
      if (panel.panelkey === key) panel.isExpanded = !panel.isExpanded;
      else panel.isExpanded = false;
      return panel;
    });
    this.setState({ panels });
  };

  toggleDrawer = () => {
    this.setState(prevState => ({
      isDrawerOpen: !prevState.isDrawerOpen
    }));
  };

  toggleDrawerExpand = () => {
    this.setState(prevState => ({
      isExpanded: !prevState.isExpanded
    }));
  };

  updateUnreadCount = () => {
    for (let i = 0; i < this.state.panels.length; i++) {
      for (let j = 0; j < this.state.panels[i].notifs.length; j++) {
        if (this.state.panels[i].notifs[j].unread === true) {
          return true;
        }
      }
    }
    return false;
  };

  render() {
    return (
      <ul className="nav navbar-nav navbar-right navbar-iconic">
        <NotifDrawerToggle
          hasUnreadMessages={this.state.hasUnreadMessages}
          onClick={this.toggleDrawer}
        />
        {this.state.isDrawerOpen && (
          <DrawerWrapper
            notificationPanels={this.state.panels}
            togglePanel={this.togglePanel}
            toggleDrawerExpand={this.toggleDrawerExpand}
            isExpanded={this.state.isExpanded}
            toggleDrawerHide={this.toggleDrawer}
            onNotificationClick={this.onNotificationClick}
            onMarkPanelAsClear={this.onMarkPanelAsClear}
            onMarkPanelAsRead={this.onMarkPanelAsRead}
          />
        )}
      </ul>
    );
  }
}

StatefulDrawerWrapper.propTypes = {
  panels: PropTypes.array,
  isDrawerOpen: PropTypes.bool,
  hasUnreadMessages: PropTypes.bool,
  isExpanded: PropTypes.bool
};
StatefulDrawerWrapper.defaultProps = {
  panels: null,
  isDrawerOpen: false,
  hasUnreadMessages: false,
  isExpanded: false
};

export default StatefulDrawerWrapper;
