import React from 'react';
import { inlineTemplate } from '../../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from '../../../../storybook/constants';
import StatefulToggleDrawerWrapper from '../Wrappers/StatefulToggleDrawerWrapper';

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
const p3notifications = [
  {
    nkey: '5',
    expanded: false,
    unread: true,
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
    unread: true,
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
    isExpanded: false,
    showLoading: true
  },
  {
    panelkey: '3',
    panelName: 'Notification Tab 3',
    notifs: p3notifications,
    isExpanded: false,
    showLoading: true
  }
];

const StatefulNotifDrawerStory = stories => {
  stories.addWithInfo('Stateful Drawer Wrapper', '', () => {
    const story = (
      <nav className="navbar navbar-pf-vertical" style={{ minHeight: '60px' }}>
        <nav className="collapse navbar-collapse">
          <StatefulToggleDrawerWrapper
            panels={panels}
            isDrawerOpen
            hasUnreadMessages
          />
        </nav>
      </nav>
    );
    return inlineTemplate({
      title: 'Stateful Drawer Wrapper',
      documentationLink: `${
        DOCUMENTATION_URL.PATTERNFLY_ORG_COMMUNICATION
      }notification-drawer`,
      story
    });
  });
};

export default StatefulNotifDrawerStory;
