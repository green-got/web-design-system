import React from 'react';
import type { StoryDefault, Story } from '@ladle/react';
import { SkeletonLoader } from './SkeletonLoader';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';

export default {
  title: 'Components / SkeletonLoader',
} satisfies StoryDefault;

export const SkeletonLoaderMain: Story = () => (
  <>
    <GlobalStyles />

    <h1>SkeletonLoader</h1>

    <SkeletonLoader />
  </>
);
