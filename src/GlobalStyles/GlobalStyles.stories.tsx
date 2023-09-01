import React from 'react';
import type { StoryDefault, Story } from '@ladle/react';
import { GlobalStyles } from './GlobalStyles';

export default {
  title: 'Foundations / Global Styles',
} satisfies StoryDefault;

export const GlobalStylesMain: Story = () => (
  <>
    <GlobalStyles />

    <h1>
      This is an empty story to be a template including the global styles
      component.
    </h1>
  </>
);
