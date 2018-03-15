import React from 'react';
import renderer from 'react-test-renderer';
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
    created_at: '2012-03-13T12:30:37.988Z',
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
    created_at: '2019-03-13T12:30:37.988Z',
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
    created_at: '2018-03-13T12:30:37.988Z',
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
    created_at: '2018-03-13T12:30:37.988Z',
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
    notifs: p1Notifications,
    isExpanded: true
  }
];

test('PanelWraper is working properly', () => {
  const component = renderer.create(
    <PanelWraper
      panelkey={panel.panelkey}
      notifications={p1Notifications}
      togglePanel={jest.fn()}
      onNotificationClick={jest.fn()}
      onMarkPanelAsRead={jest.fn()}
      onClickedLink={jest.fn()}
      onMarkPanelAsClear={jest.fn()}
      showLoading
    />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('DrawerWraper is working properly', () => {
  const component = renderer.create(
    <DrawerWrapper
      notificationPanels={panel}
      toggleDrawerHide={jest.fn()}
      toggleDrawerExpand={jest.fn()}
      togglePanel={jest.fn()}
      onNotificationClick={jest.fn()}
      onMarkPanelAsRead={jest.fn()}
      onMarkPanelAsClear={jest.fn()}
      onClickedLink={jest.fn()}
    />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('StatefulDrawerWrapper is working properly', () => {
  const component = renderer.create(
    <StatefulDrawerWrapper panels={panel} isExpanded />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('StatefulToggleDrawerWrapper is working properly', () => {
  const component = renderer.create(
    <StatefulToggleDrawerWrapper
      panels={panel}
      isDrawerOpen
      hasUnreadMessages
    />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('getIconClass is working properly', () => {
  const component = renderer.create(
    <div>
      <Icon type="pf" name={getIconClass('ok')} />
      <Icon type="pf" name={getIconClass('info')} />
      <Icon type="pf" name={getIconClass('warning')} />
    </div>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
