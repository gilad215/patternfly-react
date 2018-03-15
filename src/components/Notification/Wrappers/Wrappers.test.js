import React from 'react';
import renderer from 'react-test-renderer';
import PanelWraper from './PanelWrapper';
import DrawerWrapper from './DrawerWrapper';
import StatefulDrawerWrapper from './StatefulDrawerWrapper';
import StatefulToggleDrawerWrapper from './StatefulToggleDrawerWrapper';
import { Icon } from '../../Icon';
import getIconClass from './Icon.consts';

const notification = [
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
  }
];

const panel = [
  {
    panelkey: '1',
    panelName: 'Notification Tab 1',
    notifs: notification,
    isExpanded: true
  }
];

test('PanelWraper is working properly', () => {
  const component = renderer.create(
    <PanelWraper
      panelkey={panel.panelkey}
      notifications={notification}
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
