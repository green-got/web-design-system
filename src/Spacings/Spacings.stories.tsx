import React from 'react';
import type { StoryDefault, Story } from '@ladle/react';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';

export default {
  title: 'Foundations / Spacings',
} satisfies StoryDefault;

export const Spacings: Story = () => (
  <>
    <GlobalStyles />
    Here some colors.
  </>
);
