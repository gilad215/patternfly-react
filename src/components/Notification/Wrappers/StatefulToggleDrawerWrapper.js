import React from 'react';
import PropTypes from 'prop-types';
import { NotifDrawerToggle } from '../NotifDrawer/index';
import StatefulDrawerWrapper from './StatefulDrawerWrapper';

class StatefulToggleDrawerWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      panels: props.panels,
      isDrawerOpen: props.isDrawerOpen,
      hasUnreadMessages: props.hasUnreadMessages
    };
  }

  toggleDrawer = () => {
    this.setState(prevState => ({
      isDrawerOpen: !prevState.isDrawerOpen
    }));
  };

  updateUnreadCount = bool => {
    if (bool) this.setState({ hasUnreadMessages: true });
    else this.setState({ hasUnreadMessages: false });
  };

  render() {
    return (
      <ul className="nav navbar-nav navbar-right navbar-iconic">
        <NotifDrawerToggle
          hasUnreadMessages={this.state.hasUnreadMessages}
          onClick={this.toggleDrawer}
        />
        {this.state.isDrawerOpen && (
          <StatefulDrawerWrapper
            panels={this.state.panels}
            isDrawerOpen
            hasUnreadMessages
            updateUnreadCount={this.updateUnreadCount}
          />
        )}
      </ul>
    );
  }
}

StatefulToggleDrawerWrapper.propTypes = {
  /** Notification Panels Array */
  panels: PropTypes.array,
  /** Is Drawer Open Bool */
  isDrawerOpen: PropTypes.bool,
  /** has Unread Messages Bool */
  hasUnreadMessages: PropTypes.bool
};
StatefulToggleDrawerWrapper.defaultProps = {
  panels: null,
  isDrawerOpen: false,
  hasUnreadMessages: false
};

export default StatefulToggleDrawerWrapper;
