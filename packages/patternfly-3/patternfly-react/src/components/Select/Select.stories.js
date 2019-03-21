import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, DOCUMENTATION_URL, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import Select from './Select';
import { name } from '../../../package.json';

const stories = storiesOf(`${storybookPackageName(name)}/${STORYBOOK_CATEGORY.WIDGETS}/Select`, module);
stories.addDecorator(
  defaultTemplate({
    title: 'Select',
    documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_WIDGETS}/#progress-bars/`
  })
);

const options = [
  {
    label: 'hello',
    value: '1'
  },
  {
    label: 'there',
    value: '2'
  }
];

stories.add(
  'Select',
  withInfo('Select Component')(() => (
    <div>
      <Select label="select" value="lol" options={options} />
    </div>
  ))
);
