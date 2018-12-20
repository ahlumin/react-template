import React from 'react';
import { storiesOf } from '@storybook/react';
import SlideBar from './index.js';

const stories = storiesOf('SlideBar', module);

stories.add('a normal component', () => (
  <SlideBar />
));

stories.add("with parent's state", () => (
  <SlideBar value={5} max={1000} onDrag={(newValue) => { console.log(newValue) }} />
));