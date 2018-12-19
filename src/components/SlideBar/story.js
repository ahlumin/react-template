import React from 'react';
import { storiesOf } from '@storybook/react';
import SlideBar from './index.js';

const stories = storiesOf('SlideBar', module);

stories.add('a normal component', () => (
  <SlideBar />
));