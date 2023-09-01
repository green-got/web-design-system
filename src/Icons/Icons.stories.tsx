import React from 'react';
import type { StoryDefault, Story } from '@ladle/react';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';

export default {
  title: 'Foundations / Icons',
} satisfies StoryDefault;

export const Icons: Story = () => (
  <>
    <GlobalStyles />
    Here some icons.
  </>
);
