import React from 'react';
import { action } from '@storybook/addon-actions';
import { inlineTemplate } from '../../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from '../../../../storybook/constants';
import DrawerWrapper from '../Wrappers/DrawerWrapper';

const handleClick = e => {
  e.preventDefault();
  action('bell click')();
};

const expandClicked = () => {
  action('expand clicked!')();
};
const closeClicked = () => {
  action('close clicked!')();
};
const notifClicked = () => {
  action('notification clicked!')();
};
const linkClicked = () => {
  action('link clicked!')();
};

const p1notifications = [
  {
    nkey: '4',
    expanded: false,
    unread: true,
    icon: {
      name: 'ok',
      type: 'pf'
    },
    text: 'Success Notification',
    date: '3/31/16',
    time: '12:12:44 PM',
    dropdownid: '4',
    dropdown: [
      {
        id: '4',
        href: 'https://theforeman.org/blog',
        title: 'Dropdown Link'
      }
    ]
  },
  {
    nkey: '1',
    expanded: false,
    unread: true,
    icon: {
      name: 'info',
      type: 'pf'
    },
    text: 'Info Notification',
    date: '3/31/16',
    time: '12:12:44 PM',
    dropdownid: '1',
    dropdown: [
      {
        id: '1',
        href: 'https://theforeman.org/blog',
        title: 'Dropdown Link'
      }
    ]
  },
  {
    nkey: '2',
    expanded: false,
    unread: false,
    icon: {
      name: 'warning-triangle-o',
      type: 'pf'
    },
    text:
      'Another Event Notification that is really long to see how it reacts on smaller screens sizes.',
    date: '3/31/16',
    time: '12:12:44 PM',
    dropdownid: '2',
    dropdown: [
      {
        id: '2',
        href: 'https://theforeman.org/blog',
        title: 'Dropdown Link'
      }
    ]
  },
  {
    nkey: '3',
    expanded: false,
    unread: true,
    icon: {
      name: 'error-circle-o',
      type: 'pf'
    },
    text: 'Error Notification',
    date: '3/31/16',
    time: '12:12:44 PM',
    dropdownid: '3',
    dropdown: [
      {
        id: '3',
        href: 'https://theforeman.org/blog',
        title: 'Dropdown Link'
      }
    ]
  }
];
const p2notifications = [
  {
    nkey: '5',
    expanded: false,
    unread: false,
    icon: {
      name: 'ok',
      type: 'pf'
    },
    text: 'Success Notification',
    date: '3/31/16',
    time: '12:12:44 PM',
    dropdownid: '5',
    dropdown: [
      {
        id: '5',
        href: 'https://theforeman.org/blog',
        title: 'Dropdown Link'
      }
    ]
  },
  {
    nkey: '6',
    expanded: false,
    unread: true,
    icon: {
      name: 'info',
      type: 'pf'
    },
    text: 'Info Notification',
    date: '3/31/16',
    time: '12:12:44 PM',
    dropdownid: '6',
    dropdown: [
      {
        id: '6',
        href: 'https://theforeman.org/blog',
        title: 'Dropdown Link'
      }
    ]
  },
  {
    nkey: '7',
    expanded: false,
    unread: true,
    icon: {
      name: 'warning-triangle-o',
      type: 'pf'
    },
    text:
      'Another Event Notification that is really long to see how it reacts on smaller screens sizes.',
    date: '3/31/16',
    time: '12:12:44 PM',
    dropdownid: '7',
    dropdown: [
      {
        id: '7',
        href: 'https://theforeman.org/blog',
        title: 'Dropdown Link'
      }
    ]
  },
  {
    nkey: '8',
    expanded: false,
    unread: false,
    icon: {
      name: 'error-circle-o',
      type: 'pf'
    },
    text: 'Error Notification',
    date: '3/31/16',
    time: '12:12:44 PM',
    dropdownid: '8',
    dropdown: [
      {
        id: '8',
        href: 'https://theforeman.org/blog',
        title: 'Dropdown Link'
      }
    ]
  }
];
const panels = [
  {
    panelkey: '1',
    panelName: 'Notification Tab 1',
    notifs: p1notifications,
    isExpanded: true
  },
  {
    panelkey: '2',
    panelName: 'Notification Tab 2',
    notifs: p2notifications,
    isExpanded: false
  }
];

const WrapperNotifDrawerStory = stories => {
  stories.addWithInfo('Drawer Wrapper', '', () => {
    const story = (
      <nav className="navbar navbar-pf-vertical">
        <nav className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right navbar-iconic">
            <li className="drawer-pf-trigger open">
              <a href="#0" className="nav-item-iconic" onClick={handleClick}>
                <span className="fa fa-bell" title="Notifications" />
                <span className="badge badge-pf-bordered" />
              </a>
            </li>
          </ul>
        </nav>
        <DrawerWrapper
          notificationPanels={panels}
          toggleDrawerExpand={expandClicked}
          toggleDrawerHide={closeClicked}
          togglePanel={expandClicked}
          onNotificationClick={notifClicked}
          onMarkPanelAsRead={linkClicked}
          onMarkPanelAsClear={linkClicked}
          onClickedLink={linkClicked}
        />
      </nav>
    );
    return inlineTemplate({
      title: 'Drawer Wrapper',
      documentationLink: `${
        DOCUMENTATION_URL.PATTERNFLY_ORG_COMMUNICATION
      }notification-drawer`,
      story
    });
  });
};

export default WrapperNotifDrawerStory;
