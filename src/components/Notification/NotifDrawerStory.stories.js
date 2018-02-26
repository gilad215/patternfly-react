import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import {
  basicNotifDrawerStory,
  WrapperNotifDrawerStory,
  StatefulNotifDrawerStory
} from './Stories/index';

const stories = storiesOf('NotificationDrawer', module);
stories.addDecorator(withKnobs);

basicNotifDrawerStory(stories);
WrapperNotifDrawerStory(stories);
StatefulNotifDrawerStory(stories);
