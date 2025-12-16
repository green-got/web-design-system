import type { StoryDefault, Story } from '@ladle/react';
import { Card } from './Card';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';

export default {
  title: 'Components / Card',
} satisfies StoryDefault;

export const CardMain: Story = () => (
  <>
    <GlobalStyles />

    <h1>Card</h1>
    <Card
      bg="https://placehold.co/600x600@2x.png"
      ratio="5 / 1"
      variant="img"
    />
    <Card bg="var(--colors-success-400)" ratio="1 / 2" variant="color" />
    <Card
      bg="https://placehold.co/100x600@2x.png"
      ratio="1 / 1"
      variant="img"
    />
  </>
);
