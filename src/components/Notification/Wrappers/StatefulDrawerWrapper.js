import React from 'react';
import PropTypes from 'prop-types';
import DrawerWrapper from './DrawerWrapper';

class StatefulDrawerWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      panels: props.panels,
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
    this.setState({ panels });
    this.updateUnreadCount();
  };

  onMarkPanelAsClear = key => {
    const panels = this.state.panels.map(panel => {
      if (panel.panelkey === key) panel.notifs = [];
      return panel;
    });
    this.setState({ panels });
    this.updateUnreadCount();
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
    this.setState({ panels });
    this.updateUnreadCount();
  };

  togglePanel = key => {
    const panels = this.state.panels.map(panel => {
      if (panel.panelkey === key) panel.isExpanded = !panel.isExpanded;
      else panel.isExpanded = false;
      return panel;
    });
    this.setState({ panels });
  };

  toggleDrawerExpand = () => {
    this.setState(prevState => ({
      isExpanded: !prevState.isExpanded
    }));
  };

  updateUnreadCount = () => {
    let hasunread = false;
    for (let i = 0; i < this.state.panels.length; i++) {
      for (let j = 0; j < this.state.panels[i].notifs.length; j++) {
        if (this.state.panels[i].notifs[j].unread === true) {
          hasunread = true;
        }
      }
    }
    this.props.updateUnreadCount(hasunread);
  };

  render() {
    return (
      <DrawerWrapper
        notificationPanels={this.state.panels}
        togglePanel={this.togglePanel}
        toggleDrawerExpand={this.toggleDrawerExpand}
        isExpanded={this.state.isExpanded}
        toggleDrawerHide={this.props.toggleDrawer}
        onNotificationClick={this.onNotificationClick}
        onMarkPanelAsClear={this.onMarkPanelAsClear}
        onMarkPanelAsRead={this.onMarkPanelAsRead}
      />
    );
  }
}

StatefulDrawerWrapper.propTypes = {
  /** Notification Panels Array */
  panels: PropTypes.array,
  /** is Expanded Bool */
  isExpanded: PropTypes.bool,
  /** updateUnreadCount Func */
  updateUnreadCount: PropTypes.func,
  /** toggleDrawer Func */
  toggleDrawer: PropTypes.func
};
StatefulDrawerWrapper.defaultProps = {
  panels: null,
  isExpanded: false,
  updateUnreadCount: null,
  toggleDrawer: null
};

export default StatefulDrawerWrapper;
