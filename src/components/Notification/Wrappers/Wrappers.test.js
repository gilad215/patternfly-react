import React from 'react';
import { shallow, mount } from 'enzyme';
import PanelWraper from './PanelWrapper';
import DrawerWrapper from './DrawerWrapper';
import StatefulDrawerWrapper from './StatefulDrawerWrapper';
import StatefulToggleDrawerWrapper from './StatefulToggleDrawerWrapper';
import { Icon } from '../../Icon';
import getIconClass from './Icon.consts';

const p1Notifications = [
  {
    id: 12,
    seen: false,
    level: 'info',
    text: 'Foreman Community Newsletter - January 2019',
    group: 'Community',
    actions: {
      links: [
        {
          href:
            'http://theforeman.org/2018/01/foreman-community-newsletter-january-2018.html',
          title: 'Open',
          external: true
        }
      ]
    }
  },
  {
    id: 14,
    seen: true,
    level: 'warning',
    text: 'Foreman Community Newsletter - January 2019',
    group: 'Community',
    actions: {
      links: [
        {
          href:
            'http://theforeman.org/2018/01/foreman-community-newsletter-january-2018.html',
          title: 'Open',
          external: true
        }
      ]
    }
  },
  {
    id: 15,
    seen: true,
    level: 'ok',
    text: 'Foreman Community Newsletter - January 2029',
    group: 'Community',
    actions: {
      links: [
        {
          href:
            'http://theforeman.org/2018/01/foreman-community-newsletter-january-2018.html',
          title: 'Open',
          external: true
        }
      ]
    }
  },
  {
    id: 16,
    seen: false,
    level: 'error',
    text: 'Foreman Community Newsletter - January 2029',
    group: 'Community',
    actions: {
      links: [
        {
          href:
            'http://theforeman.org/2018/01/foreman-community-newsletter-january-2018.html',
          title: 'Open',
          external: true
        }
      ]
    }
  }
];
const panel = [
  {
    panelkey: '1',
    panelName: 'Notification Tab 1',
    notifications: p1Notifications,
    isExpanded: true
  }
];

test('PanelWraper is working properly', () => {
  const component = mount(
    <PanelWraper
      panelkey={panel.panelkey}
      panelName="panelName"
      notifications={p1Notifications}
      isExpanded
      togglePanel={jest.fn()}
      onNotificationClick={jest.fn()}
      onNotificationHide={jest.fn()}
      onMarkPanelAsRead={jest.fn()}
      onClickedLink={jest.fn()}
      onMarkPanelAsClear={jest.fn()}
      showLoading
    />
  );

  expect(component.render()).toMatchSnapshot();
});

test('DrawerWraper is working properly', () => {
  const component = mount(
    <DrawerWrapper
      notificationPanels={panel}
      toggleDrawerHide={jest.fn()}
      toggleDrawerExpand={jest.fn()}
      togglePanel={jest.fn()}
      isExpandable
      isExpanded
      onNotificationClick={jest.fn()}
      onNotificationHide={jest.fn()}
      onMarkPanelAsRead={jest.fn()}
      onMarkPanelAsClear={jest.fn()}
      onClickedLink={jest.fn()}
    />
  );

  expect(component.render()).toMatchSnapshot();
});

test('StatefulDrawerWrapper is working properly', () => {
  const updateFunc = () => {
    const success = 'success';
    return success;
  };
  const component = shallow(
    <StatefulDrawerWrapper
      panels={panel}
      isExpanded
      updateUnreadCount={updateFunc}
    />
  );
  component.instance().onMarkPanelAsRead('1');
  component.instance().onMarkPanelAsClear('1');
  component.instance().onNotificationClick('1', 12);
  component.instance().onNotificationHide('1', 12);
  component.instance().togglePanel('1');
  component.instance().toggleDrawerExpand();
  component.instance().updateUnreadCount();

  expect(component.render()).toMatchSnapshot();
});

test('StatefulToggleDrawerWrapper is working properly', () => {
  const component = mount(
    <StatefulToggleDrawerWrapper
      panels={panel}
      isDrawerOpen
      hasUnreadMessages
    />
  );

  expect(component.render()).toMatchSnapshot();
});

test('getIconClass is working properly', () => {
  const component = mount(
    <div>
      <Icon type="pf" name={getIconClass('ok')} />
      <Icon type="pf" name={getIconClass('info')} />
      <Icon type="pf" name={getIconClass('warning')} />
    </div>
  );

  expect(component.render()).toMatchSnapshot();
});
