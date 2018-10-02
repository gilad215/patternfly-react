import { storiesOf } from '@storybook/react';
import { storybookPackageName, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import { FileUploadStory } from './FileUploadStory';
import { name } from '../../../package.json';

const stories = storiesOf(`${storybookPackageName(name)}/${STORYBOOK_CATEGORY.FORMS_AND_CONTROLS}/FileUpload`, module);
FileUploadStory(stories);
