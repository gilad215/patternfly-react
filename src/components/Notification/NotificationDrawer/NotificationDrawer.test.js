import React from 'react';
import renderer from 'react-test-renderer';
import { NotificationDrawer, NotificationDrawerToggle } from './index';

test('NotificationDrawer is working properly', () => {
  const component = renderer.create(
    <NotificationDrawer>
      <div>Child</div>
    </NotificationDrawer>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('NotificationDrawer Title is working properly', () => {
  const component = renderer.create(<NotificationDrawer.Title />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('NotificationDrawer Accordion is working properly', () => {
  const component = renderer.create(
    <NotificationDrawer.Accordion>
      <div>Child</div>
    </NotificationDrawer.Accordion>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('NotificationDrawer Toggle is working properly', () => {
  const component = renderer.create(<NotificationDrawerToggle />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('NotificationDrawer Dropdown is working properly', () => {
  const component = renderer.create(
    <NotificationDrawer.Dropdown id="1">
      <div>Child</div>
    </NotificationDrawer.Dropdown>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('NotificationDrawer Panel is working properly', () => {
  const component = renderer.create(
    <NotificationDrawer.Panel>
      <div>Child</div>
    </NotificationDrawer.Panel>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('NotificationDrawer Panel Action and Link is working properly', () => {
  const component = renderer.create(
    <NotificationDrawer.PanelAction>
      <NotificationDrawer.PanelActionLink>
        <div>Child</div>
      </NotificationDrawer.PanelActionLink>
    </NotificationDrawer.PanelAction>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('NotificationDrawer Panel Body is working properly', () => {
  const component = renderer.create(
    <NotificationDrawer.PanelBody>
      <div>Child</div>
    </NotificationDrawer.PanelBody>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('NotificationDrawer Panel Counter is working properly', () => {
  const component = renderer.create(
    <NotificationDrawer.PanelCounter>
      <div>Child</div>
    </NotificationDrawer.PanelCounter>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('NotificationDrawer Panel Heading is working properly', () => {
  const component = renderer.create(
    <NotificationDrawer.PanelHeading>
      <div>Child</div>
    </NotificationDrawer.PanelHeading>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('NotificationDrawer Panel Title is working properly', () => {
  const component = renderer.create(<NotificationDrawer.PanelTitle />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
