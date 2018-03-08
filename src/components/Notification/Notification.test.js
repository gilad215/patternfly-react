import React from 'react';
import renderer from 'react-test-renderer';
import { Notification } from './index';

test('Notification is working properly', () => {
  const component = renderer.create(
    <Notification>
      <div>Child</div>
    </Notification>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Notification Content is working properly', () => {
  const component = renderer.create(
    <Notification.Content>
      <div>Child</div>
    </Notification.Content>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Notification Info is working properly', () => {
  const component = renderer.create(<Notification.Info />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Notification Message is working properly', () => {
  const component = renderer.create(
    <Notification.Message>
      <div>Child</div>
    </Notification.Message>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
