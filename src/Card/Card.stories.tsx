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
    <Card bg="https://placehold.co/600x600@2x.png" variant="img">
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
    </Card>
    <br />
    <br />
    <Card bg="var(--colors-success-400)" variant="color">
      <p>Hello</p>
    </Card>
    <br />
    <br />
    <Card bg="https://placehold.co/100x600@2x.png" variant="img">
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
    </Card>

    <Card
      bg="https://placehold.co/100x600@2x.png"
      mask="linear-gradient(black, black, transparent)"
      variant="img"
    >
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
    </Card>
  </>
);
