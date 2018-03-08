import React from 'react';
import renderer from 'react-test-renderer';
import { NotifDrawer, NotifDrawerToggle } from './index';

test('NotifDrawer is working properly', () => {
  const component = renderer.create(
    <NotifDrawer>
      <div>Child</div>
    </NotifDrawer>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('NotifDrawer Title is working properly', () => {
  const component = renderer.create(<NotifDrawer.Title />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('NotifDrawer Accordion is working properly', () => {
  const component = renderer.create(
    <NotifDrawer.Accordion>
      <div>Child</div>
    </NotifDrawer.Accordion>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('NotifDrawer Toggle is working properly', () => {
  const component = renderer.create(<NotifDrawerToggle />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('NotifDrawer Dropdown is working properly', () => {
  const component = renderer.create(
    <NotifDrawer.Dropdown id="1">
      <div>Child</div>
    </NotifDrawer.Dropdown>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('NotifDrawer Panel is working properly', () => {
  const component = renderer.create(
    <NotifDrawer.Panel>
      <div>Child</div>
    </NotifDrawer.Panel>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('NotifDrawer Panel Action and Link is working properly', () => {
  const component = renderer.create(
    <NotifDrawer.PanelAction>
      <NotifDrawer.PanelActionLink>
        <div>Child</div>
      </NotifDrawer.PanelActionLink>
    </NotifDrawer.PanelAction>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('NotifDrawer Panel Body is working properly', () => {
  const component = renderer.create(
    <NotifDrawer.PanelBody>
      <div>Child</div>
    </NotifDrawer.PanelBody>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('NotifDrawer Panel Counter is working properly', () => {
  const component = renderer.create(
    <NotifDrawer.PanelCounter>
      <div>Child</div>
    </NotifDrawer.PanelCounter>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('NotifDrawer Panel Heading is working properly', () => {
  const component = renderer.create(
    <NotifDrawer.PanelHeading>
      <div>Child</div>
    </NotifDrawer.PanelHeading>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('NotifDrawer Panel Title is working properly', () => {
  const component = renderer.create(<NotifDrawer.PanelTitle />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
