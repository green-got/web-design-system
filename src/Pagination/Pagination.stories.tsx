import React from 'react';
import type { StoryDefault, Story } from '@ladle/react';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';

export default {
  title: 'Components / Pagination',
} satisfies StoryDefault;

export const PaginationStory: Story = () => (
  <>
    <GlobalStyles />
    Here is a pagination component story.
  </>
);
