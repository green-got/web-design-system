import React from 'react';
import type { StoryDefault, Story } from '@ladle/react';
import { GlobalStyles } from './GlobalStyles/GlobalStyles';

export default {
  title: 'Home',
  parameters: {},
} satisfies StoryDefault;

export const Home: Story = () => (
  <>
    <GlobalStyles />

    <h1>Green-Got design system</h1>
  </>
);
